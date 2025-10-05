import React from "react";

function Portocard({image ,types = [], title_picture, title, description, link}){
    return (
        <div className = "max-w-sm card-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img className = "w-full h-60 object-cover" src = {image} alt = {title_picture}></img>
            <div className = "p-5">
                <h3 className = "text-2xl font-bold mb-3" 
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#3e94d5",
                }}>{title}</h3>

                
                <div className = "flex flex-wrap gap-2 mb-3">
                    {types && types.map((t, index) => (
                        <span 
                            key = {index}
                            className = "text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-3">
                            {t}
                        </span>
                    ))}
                </div>
                
                <p className = "text-gray-600 text-sm">{description}</p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-sm mt-2 inline-block hover:underline"
                    >
                        Lihat Project
                    </a>
                )}
            </div>
        </div>
        
    );
    
    
}

export default Portocard