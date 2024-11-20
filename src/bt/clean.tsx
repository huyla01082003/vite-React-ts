import React, { useEffect, useState } from "react";

interface FileWithPreview extends File {
    preview: string;
}

const Content: React.FC = () => {
    const [avatar, setAvatar] = useState<FileWithPreview | null>(null);

    useEffect(() => {
        return () => {
            if (avatar) {
                URL.revokeObjectURL(avatar.preview);
            }
        };
    }, [avatar]);

    const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            const fileWithPreview: FileWithPreview = Object.assign(file, { preview: previewUrl });
            setAvatar(fileWithPreview);
        }
    };

    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />

            {avatar && (
                <img src={avatar.preview} alt="Avatar Preview" />
            )}
        </div>
    );
};

export default Content;