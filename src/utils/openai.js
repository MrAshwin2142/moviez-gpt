import OpenAI from 'openai';
import { OPENIA_KEY } from './constants';

const openai = new OpenAI({
    apiKey: OPENIA_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true 
});
export default openai;