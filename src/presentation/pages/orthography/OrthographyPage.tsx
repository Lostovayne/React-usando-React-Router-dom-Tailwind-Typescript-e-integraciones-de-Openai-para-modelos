import { useState } from "react";
import { GptMessage, TextMessageBox, TypingLoader } from "../../components";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";

interface Message {
    text: string;
    isGpt: boolean;
}

export const OrthographyPage = () => {
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [messages, setmessages] = useState<Message[]>([]);

    const handlePost = async (text: string) => {
        setIsLoading(true);
        setmessages([...messages, { text, isGpt: false }]);
        // Use Cases
        setIsLoading(false);
        // añadir el mensaje de gpt en true
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2 ">
                    <GptMessage text="¡Hola! Soy ChatGPT, un asistente de inteligencia artificial diseñado para ayudarte en tus correcciones de texto. Si necesitas pulir tu escritura, corregir gramática o simplemente mejorar la claridad de tus textos, ¡estoy aquí para ayudarte! Solo tienes que proporcionarme el texto que deseas corregir y estaré encantado de ayudarte a hacerlo más claro y conciso. ¿En qué puedo ayudarte hoy?" />

                    {messages.map((message, index) =>
                        message.isGpt ? (
                            <GptMessage key={index} text={"Esto es Openai"} />
                        ) : (
                            <MyMessage key={index} text={message.text} />
                        )
                    )}

                    {isloading && (
                        <div className="col-start-1 col-end-12 fade-in">
                            <TypingLoader className="fade-in" />
                        </div>
                    )}
                </div>
            </div>

            <TextMessageBox
                onSendMessage={handlePost}
                placeholder="Escribe tu mensaje..."
                disableCorrection
            />
            {/* <TextMessageBoxFile onSendMessage={handlePost} placeholder="Escribe tu mensaje..." /> */}
            {/* 
            <TextMessageBoxSelect
                onSendMessage={console.log}
                options={[
                    { id: "1", text: "Option 1" },
                    { id: "2", text: "Option 2" },
                ]}
            /> */}
        </div>
    );
};
