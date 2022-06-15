export interface ApiLocation {
  idRegiao: number;
  idAreaAviso: string;
  globalIdLocal: number;
  idConcelho: number;
  latitude: string;
  idDistrito: number;
  local: string;
  longitude: string;
}

export interface ApiLocationWeatherData {
  tMin: string;
  idFfxVento: number;
  dataUpdate: Date;
  tMax: string;
  iUv: string;
  intervaloHora: string;
  idTipoTempo: number;
  globalIdLocal: number;
  probabilidadePrecipita: string;
  idPeriodo: number;
  dataPrev: Date;
  ddVento: string;
  tMed: string;
  tempAguaMar: string;
  periodoPico: string;
  ondulacao: string;
  hR: string;
  utci: string;
  dirOndulacao: string;
  ffVento: string;
  marTotal: string;
  periodOndulacao: string;
}

export interface ApiWeatherPhoto {
  descWeatherTypeEN: string;
  descWeatherTypePT: string;
  idWeatherType: number;
}
