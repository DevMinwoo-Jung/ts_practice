// mapped types
type Heroes = 'Hulk' | 'Thor' | 'Capt';
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
Hulk: 456, // hulk's age must be number
};
