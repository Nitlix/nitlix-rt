export default function(bodyRequirements: string[], bodyJSON: { [key: string]: any } | null): boolean {
    if (!bodyJSON) {
        return false
    }

    for (const requirement of bodyRequirements) {
        if (!bodyJSON[requirement]) {
            return false
        }
    }
    return true;
}