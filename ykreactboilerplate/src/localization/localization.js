import ar from './local/ar.json';
import en from './local/en.json';

export const Localizations = [ar, en].map(local => ({
    name: local["name"],
    translation: local["translations"] 
}));