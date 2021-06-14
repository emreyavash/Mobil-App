/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  GirisYapScreen:undefined;
  AnasayfaScreen : undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type GirisSayfa={
  GirisYapScreen:undefined;
  KayıtOlScreen:undefined;
  AnasayfaScreen : undefined;
}
export type Anasayfa={
  AnasayfaScreen : undefined;
  index2:undefined;
}