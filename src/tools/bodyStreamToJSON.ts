export default async function(stream: ReadableStream): Promise<any> {
    const reader = stream.getReader();
    const chunks = [];
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(Buffer.from(value).toString());
    }
    return JSON.parse(chunks.join(''));
}