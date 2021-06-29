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
  Mesajlar:undefined;
  Profilim:undefined
};

export type GirisSayfa={
  GirisYapScreen:undefined;
  KayıtOlScreen:undefined;

}
export type Anasayfa={
  AnasayfaScreen:undefined;
  Hizmetler:undefined;
}
export type KategorilerParamList={
  Kategoriler:undefined;
}
export type MesajlarParamList={
  Mesajlar:undefined;
}
export type ProfilimParamList={
  Profilim:undefined;
}