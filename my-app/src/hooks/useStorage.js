import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (!file) return;

        // Read file as base64
        const reader = new FileReader();

        reader.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                setProgress(percentComplete);
            }
        };

        reader.onload = async () => {
            try {
                const base64Data = reader.result;
                const collectionRef = collection(firestore, 'images');
                
                const createdAt = serverTimestamp();
                await addDoc(collectionRef, { 
                    url: base64Data, 
                    name: file.name,
                    createdAt 
                });
                
                setProgress(100);
                setUrl(base64Data);
            } catch (err) {
                setError(err);
            }
        };

        reader.onerror = (err) => {
            setError(err);
        };

        reader.readAsDataURL(file);
    }, [file]);

    return { progress, url, error };
}

export default useStorage;