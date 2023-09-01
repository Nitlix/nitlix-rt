import { NextRequest } from 'next/server'
import bodyStreamToJSON from './tools/bodyStreamToJSON';

export default async function(bodyRequirements: string[], request: NextRequest): Promise<boolean> {
    if (!request.body){
        return false;
    }

    const body = await bodyStreamToJSON(request.body);

    for (const requirement of bodyRequirements) {
        if (!body[requirement]) {
            return false
        }
    }
    return true;
}