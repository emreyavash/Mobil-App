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
  Anasayfa: undefined;
  Kategoriler: undefined;
  Mesajlar:undefined
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
  Anasayfa:undefined;
  Hizmetler:undefined;
}
export type KategorilerParamList={
  Kategoriler:undefined;
}
export type MesajlarParamList={
  Mesajlar:undefined;
}