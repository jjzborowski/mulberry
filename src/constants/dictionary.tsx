const DICTIONARY = {
    en: {
        'l_home': 'Home',
        'l_contact': 'Contact',
        'l_not_found': 'PAGE NOT FOUND'
    }
};

const TRANSLATE = (lang: string, key: string): any => {
    return (DICTIONARY as any)[lang][key];
};

export default TRANSLATE;