import DICTIONARY from '../constants/dictionary';

const TRANSLATE = (lang: string, key: string): any => {
    return (DICTIONARY as any)[lang][key];
};

export default TRANSLATE;