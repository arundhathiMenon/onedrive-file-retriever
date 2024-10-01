// utils/fetchChildren.js
export const fetchChildren = async (accessToken, sharedFolderUrl) => {
    const encodedUrl = btoa(sharedFolderUrl).replace(/=/g, '').replace(/\//g, '_').replace(/\+/g, '-');
    const apiUrl = `https://graph.microsoft.com/v1.0/shares/u!${encodedUrl}/driveItem/children`;

    const response = await fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch children');
    }

    const data = await response.json();
    return data.value;
};
