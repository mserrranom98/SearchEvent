import {Injectable} from '@angular/core';
import {Regiones} from '../../models/regiones/regiones.model';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {
  private comunas: any[] = [
    {
      id: 0,
      nombre: 'Arica',
      idRegion: 0
    },
    {
      id: 1,
      nombre: 'Camarones',
      idRegion: 0
    },
    {
      id: 2,
      nombre: 'Putre',
      idRegion: 0
    },
    {
      id: 3,
      nombre: 'General Lagos',
      idRegion: 0
    },
    {
      id: 4,
      nombre: 'Iquique',
      idRegion: 1
    },
    {
      id: 5,
      nombre: 'Alto Hospicio',
      idRegion: 1
    },
    {
      id: 6,
      nombre: 'Pozo Almonte',
      idRegion: 1
    },
    {
      id: 7,
      nombre: 'Camiña',
      idRegion: 1
    },
    {
      id: 8,
      nombre: 'Colchane',
      idRegion: 1
    },
    {
      id: 9,
      nombre: 'Huara',
      idRegion: 1
    },
    {
      id: 10,
      nombre: 'Pica',
      idRegion: 1
    },
    {
      id: 11,
      nombre: 'Antofagasta',
      idRegion: 2
    },
    {
      id: 12,
      nombre: 'Mejillones',
      idRegion: 2
    },
    {
      id: 13,
      nombre: 'Sierra Gorda',
      idRegion: 2
    },
    {
      id: 14,
      nombre: 'Taltal',
      idRegion: 2
    },
    {
      id: 15,
      nombre: 'Calama',
      idRegion: 2
    },
    {
      id: 16,
      nombre: 'Ollagüe',
      idRegion: 2
    },
    {
      id: 17,
      nombre: 'San Pedro de Atacama',
      idRegion: 2
    },
    {
      id: 18,
      nombre: 'Tocopilla',
      idRegion: 2
    },
    {
      id: 19,
      nombre: 'María Elena',
      idRegion: 2
    },
    {
      id: 20,
      nombre: 'Copiapó',
      idRegion: 3
    },
    {
      id: 21,
      nombre: 'Caldera',
      idRegion: 3
    },
    {
      id: 22,
      nombre: 'Tierra Amarilla',
      idRegion: 3
    },
    {
      id: 23,
      nombre: 'Chañaral',
      idRegion: 3
    },
    {
      id: 24,
      nombre: 'Diego de Almagro',
      idRegion: 3
    },
    {
      id: 25,
      nombre: 'Vallenar',
      idRegion: 3
    },
    {
      id: 26,
      nombre: 'Alto del Carmen',
      idRegion: 3
    },
    {
      id: 27,
      nombre: 'Freirina',
      idRegion: 3
    },
    {
      id: 28,
      nombre: 'Huasco',
      idRegion: 3
    },
    {
      id: 29,
      nombre: 'La Serena',
      idRegion: 4
    },
    {
      id: 30,
      nombre: 'Coquimbo',
      idRegion: 4
    },
    {
      id: 31,
      nombre: 'Andacollo',
      idRegion: 4
    },
    {
      id: 32,
      nombre: 'La Higuera',
      idRegion: 4
    },
    {
      id: 33,
      nombre: 'Paiguano',
      idRegion: 4
    },
    {
      id: 34,
      nombre: 'Vicuña',
      idRegion: 4
    },
    {
      id: 35,
      nombre: 'Illapel',
      idRegion: 4
    },
    {
      id: 36,
      nombre: 'Canela',
      idRegion: 4
    },
    {
      id: 37,
      nombre: 'Los Vilos',
      idRegion: 4
    },
    {
      id: 38,
      nombre: 'Salamanca',
      idRegion: 4
    },
    {
      id: 39,
      nombre: 'Ovalle',
      idRegion: 4
    },
    {
      id: 40,
      nombre: 'Combarbalá',
      idRegion: 4
    },
    {
      id: 41,
      nombre: 'Monte Patria',
      idRegion: 4
    },
    {
      id: 42,
      nombre: 'Punitaqui',
      idRegion: 4
    },
    {
      id: 43,
      nombre: 'Río Hurtado',
      idRegion: 4
    },
    {
      id: 44,
      nombre: 'Valparaíso',
      idRegion: 5
    },
    {
      id: 45,
      nombre: 'Casablanca',
      idRegion: 5
    },
    {
      id: 46,
      nombre: 'Concón',
      idRegion: 5
    },
    {
      id: 47,
      nombre: 'Juan Fernández',
      idRegion: 5
    },
    {
      id: 48,
      nombre: 'Puchuncaví',
      idRegion: 5
    },
    {
      id: 49,
      nombre: 'Quintero',
      idRegion: 5
    },
    {
      id: 50,
      nombre: 'Viña del Mar',
      idRegion: 5
    },
    {
      id: 51,
      nombre: 'Isla de Pascua',
      idRegion: 5
    },
    {
      id: 52,
      nombre: 'Los Andes',
      idRegion: 5
    },
    {
      id: 53,
      nombre: 'Calle Larga',
      idRegion: 5
    },
    {
      id: 53,
      nombre: 'Rinconada',
      idRegion: 5
    },
    {
      id: 54,
      nombre: 'San Esteban',
      idRegion: 5
    },
    {
      id: 55,
      nombre: 'La Ligua',
      idRegion: 5
    },
    {
      id: 56,
      nombre: 'Cabildo',
      idRegion: 5
    },
    {
      id: 57,
      nombre: 'Papudo',
      idRegion: 5
    },
    {
      id: 58,
      nombre: 'Petorca',
      idRegion: 5
    },
    {
      id: 59,
      nombre: 'Zapallar',
      idRegion: 5
    },
    {
      id: 60,
      nombre: 'Quillota',
      idRegion: 5
    },
    {
      id: 61,
      nombre: 'Calera',
      idRegion: 5
    },
    {
      id: 62,
      nombre: 'Hijuelas',
      idRegion: 5
    },
    {
      id: 63,
      nombre: 'La Cruz',
      idRegion: 5
    },
    {
      id: 64,
      nombre: 'Nogales',
      idRegion: 5
    },
    {
      id: 65,
      nombre: 'San Antonio',
      idRegion: 5
    },
    {
      id: 66,
      nombre: 'Algarrobo',
      idRegion: 5
    },
    {
      id: 67,
      nombre: 'Cartagena',
      idRegion: 5
    },
    {
      id: 68,
      nombre: 'El Quisco',
      idRegion: 5
    },
    {
      id: 69,
      nombre: 'El Tabo',
      idRegion: 5
    },
    {
      id: 70,
      nombre: 'Santo Domingo',
      idRegion: 5
    },
    {
      id: 71,
      nombre: 'San Felipe',
      idRegion: 5
    },
    {
      id: 72,
      nombre: 'Catemu',
      idRegion: 5
    },
    {
      id: 73,
      nombre: 'Llaillay',
      idRegion: 5
    },
    {
      id: 74,
      nombre: 'Panquehue',
      idRegion: 5
    },
    {
      id: 75,
      nombre: 'Putaendo',
      idRegion: 5
    },
    {
      id: 76,
      nombre: 'Santa María',
      idRegion: 5
    },
    {
      id: 77,
      nombre: 'Quilpué',
      idRegion: 5
    },
    {
      id: 78,
      nombre: 'Limache',
      idRegion: 5
    },
    {
      id: 79,
      nombre: 'Villa Alemana',
      idRegion: 5
    },
    {
      id: 80,
      nombre: 'Olmué',
      idRegion: 5
    },
    {
      id: 81,
      nombre: 'Rancagua',
      idRegion: 6
    },
    {
      id: 82,
      nombre: 'Codegua',
      idRegion: 6
    },
    {
      id: 83,
      nombre: 'Coinco',
      idRegion: 6
    },
    {
      id: 84,
      nombre: 'Coltauco',
      idRegion: 6
    },
    {
      id: 85,
      nombre: 'Doñihue',
      idRegion: 6
    },
    {
      id: 86,
      nombre: 'Graneros',
      idRegion: 6
    },
    {
      id: 87,
      nombre: 'Las Cabras',
      idRegion: 6
    },
    {
      id: 88,
      nombre: 'Machalí',
      idRegion: 6
    },
    {
      id: 89,
      nombre: 'Malloa',
      idRegion: 6
    },
    {
      id: 90,
      nombre: 'Mostazal',
      idRegion: 6
    },
    {
      id: 91,
      nombre: 'Olivar',
      idRegion: 6
    },
    {
      id: 92,
      nombre: 'Peumo',
      idRegion: 6
    },
    {
      id: 93,
      nombre: 'Pichidegua',
      idRegion: 6
    },
    {
      id: 94,
      nombre: 'Quinta de Tilcoco',
      idRegion: 6
    },
    {
      id: 95,
      nombre: 'Rengo',
      idRegion: 6
    },
    {
      id: 96,
      nombre: 'Requínoa',
      idRegion: 6
    },
    {
      id: 97,
      nombre: 'San Vicente',
      idRegion: 6
    },
    {
      id: 98,
      nombre: 'Pichilemu',
      idRegion: 6
    },
    {
      id: 99,
      nombre: 'La Estrella',
      idRegion: 6
    },
    {
      id: 100,
      nombre: 'Litueche',
      idRegion: 6
    },
    {
      id: 101,
      nombre: 'Marchihue',
      idRegion: 6
    },
    {
      id: 102,
      nombre: 'Navidad',
      idRegion: 6
    },
    {
      id: 103,
      nombre: 'Paredones',
      idRegion: 6
    },
    {
      id: 104,
      nombre: 'San Fernando',
      idRegion: 6
    },
    {
      id: 105,
      nombre: 'Chépica',
      idRegion: 6
    },
    {
      id: 106,
      nombre: 'Chimbarongo',
      idRegion: 6
    },
    {
      id: 107,
      nombre: 'Lolol',
      idRegion: 6
    },
    {
      id: 108,
      nombre: 'Nancagua',
      idRegion: 6
    },
    {
      id: 107,
      nombre: 'Palmilla',
      idRegion: 6
    },
    {
      id: 108,
      nombre: 'Peralillo',
      idRegion: 6
    },
    {
      id: 109,
      nombre: 'Placilla',
      idRegion: 6
    },
    {
      id: 110,
      nombre: 'Pumanque',
      idRegion: 6
    },
    {
      id: 111,
      nombre: 'Santa Cruz',
      idRegion: 6
    },
    {
      id: 112,
      nombre: 'Talca',
      idRegion: 7
    },
    {
      id: 113,
      nombre: 'Constitución',
      idRegion: 7
    },
    {
      id: 114,
      nombre: 'Curepto',
      idRegion: 7
    },
    {
      id: 115,
      nombre: 'Empedrado',
      idRegion: 7
    },
    {
      id: 116,
      nombre: 'Maule',
      idRegion: 7
    },
    {
      id: 117,
      nombre: 'Pelarco',
      idRegion: 7
    },
    {
      id: 118,
      nombre: 'Pencahue',
      idRegion: 7
    },
    {
      id: 119,
      nombre: 'Río Claro',
      idRegion: 7
    },
    {
      id: 120,
      nombre: 'San Clemente',
      idRegion: 7
    },
    {
      id: 121,
      nombre: 'San Rafael',
      idRegion: 7
    },
    {
      id: 122,
      nombre: 'Cauquenes',
      idRegion: 7
    },
    {
      id: 123,
      nombre: 'Chanco',
      idRegion: 7
    },
    {
      id: 124,
      nombre: 'Pelluhue',
      idRegion: 7
    },
    {
      id: 125,
      nombre: 'Curicó',
      idRegion: 7
    },
    {
      id: 126,
      nombre: 'Hualañé',
      idRegion: 7
    },
    {
      id: 127,
      nombre: 'Licantén',
      idRegion: 7
    },
    {
      id: 128,
      nombre: 'Molina',
      idRegion: 7
    },
    {
      id: 129,
      nombre: 'Rauco',
      idRegion: 7
    },
    {
      id: 130,
      nombre: 'Romeral',
      idRegion: 7
    },
    {
      id: 131,
      nombre: 'Sagrada Familia',
      idRegion: 7
    },
    {
      id: 132,
      nombre: 'Teno',
      idRegion: 7
    },
    {
      id: 133,
      nombre: 'Vichuquén',
      idRegion: 7
    },
    {
      id: 134,
      nombre: 'Linares',
      idRegion: 7
    },
    {
      id: 135,
      nombre: 'Colbún',
      idRegion: 7
    },
    {
      id: 136,
      nombre: 'Longaví',
      idRegion: 7
    },
    {
      id: 137,
      nombre: 'Parral',
      idRegion: 7
    },
    {
      id: 138,
      nombre: 'ReVro',
      idRegion: 7
    },
    {
      id: 139,
      nombre: 'San Javier',
      idRegion: 7
    },
    {
      id: 140,
      nombre: 'Villa Alegre',
      idRegion: 7
    },
    {
      id: 141,
      nombre: 'Yerbas Buenas',
      idRegion: 7
    },
    {
      id: 142,
      nombre: 'Concepción',
      idRegion: 8
    },
    {
      id: 143,
      nombre: 'Coronel',
      idRegion: 8
    },
    {
      id: 144,
      nombre: 'Chiguayante',
      idRegion: 8
    },
    {
      id: 145,
      nombre: 'Florida',
      idRegion: 8
    },
    {
      id: 146,
      nombre: 'Hualqui',
      idRegion: 8
    },
    {
      id: 147,
      nombre: 'Lota',
      idRegion: 8
    },
    {
      id: 148,
      nombre: 'Penco',
      idRegion: 8
    },
    {
      id: 149,
      nombre: 'San Pedro de la Paz',
      idRegion: 8
    },
    {
      id: 150,
      nombre: 'Santa Juana',
      idRegion: 8
    },
    {
      id: 151,
      nombre: 'Talcahuano',
      idRegion: 8
    },
    {
      id: 152,
      nombre: 'Tomé',
      idRegion: 8
    },
    {
      id: 153,
      nombre: 'Hualpén',
      idRegion: 8
    },
    {
      id: 154,
      nombre: 'Lebu',
      idRegion: 8
    },
    {
      id: 155,
      nombre: 'Arauco',
      idRegion: 8
    },
    {
      id: 156,
      nombre: 'Cañete',
      idRegion: 8
    },
    {
      id: 157,
      nombre: 'Contulmo',
      idRegion: 8
    },
    {
      id: 158,
      nombre: 'Curanilahue',
      idRegion: 8
    },
    {
      id: 159,
      nombre: 'Los Álamos',
      idRegion: 8
    },
    {
      id: 160,
      nombre: 'Tirúa',
      idRegion: 8
    },
    {
      id: 161,
      nombre: 'Los Ángeles',
      idRegion: 8
    },
    {
      id: 162,
      nombre: 'Antuco',
      idRegion: 8
    },
    {
      id: 163,
      nombre: 'Cabrero',
      idRegion: 8
    },
    {
      id: 164,
      nombre: 'Laja',
      idRegion: 8
    },
    {
      id: 165,
      nombre: 'Mulchén',
      idRegion: 8
    },
    {
      id: 166,
      nombre: 'Nacimiento',
      idRegion: 8
    },
    {
      id: 167,
      nombre: 'Negrete',
      idRegion: 8
    },
    {
      id: 168,
      nombre: 'Quilaco',
      idRegion: 8
    },
    {
      id: 169,
      nombre: 'Quilleco',
      idRegion: 8
    },
    {
      id: 170,
      nombre: 'San Rosendo',
      idRegion: 8
    },
    {
      id: 171,
      nombre: 'Santa Bárbara',
      idRegion: 8
    },
    {
      id: 172,
      nombre: 'Tucapel',
      idRegion: 8
    },
    {
      id: 173,
      nombre: 'Yumbel',
      idRegion: 8
    },
    {
      id: 174,
      nombre: 'Alto Biobío',
      idRegion: 8
    },
    {
      id: 175,
      nombre: 'Chillán',
      idRegion: 8
    },
    {
      id: 176,
      nombre: 'Bulnes',
      idRegion: 8
    },
    {
      id: 177,
      nombre: 'Cobquecura',
      idRegion: 8
    },
    {
      id: 178,
      nombre: 'Coelemu',
      idRegion: 8
    },
    {
      id: 179,
      nombre: 'Coihueco',
      idRegion: 8
    },
    {
      id: 180,
      nombre: 'Chillán Viejo',
      idRegion: 8
    },
    {
      id: 181,
      nombre: 'El Carmen',
      idRegion: 8
    },
    {
      id: 182,
      nombre: 'Ninhue',
      idRegion: 8
    },
    {
      id: 183,
      nombre: 'Ñiquén',
      idRegion: 8
    },
    {
      id: 184,
      nombre: 'Pemuco',
      idRegion: 8
    },
    {
      id: 185,
      nombre: 'Pinto',
      idRegion: 8
    },
    {
      id: 186,
      nombre: 'Portezuelo',
      idRegion: 8
    },
    {
      id: 187,
      nombre: 'Quillón',
      idRegion: 8
    },
    {
      id: 188,
      nombre: 'Quirihue',
      idRegion: 8
    },
    {
      id: 189,
      nombre: 'Ránquil',
      idRegion: 8
    },
    {
      id: 190,
      nombre: 'San Carlos',
      idRegion: 8
    },
    {
      id: 191,
      nombre: 'San Fabián',
      idRegion: 8
    },
    {
      id: 192,
      nombre: 'San Ignacio',
      idRegion: 8
    },
    {
      id: 193,
      nombre: 'San Nicolás',
      idRegion: 8
    },
    {
      id: 194,
      nombre: 'Treguaco',
      idRegion: 8
    },
    {
      id: 195,
      nombre: 'Yungay',
      idRegion: 8
    },
    {
      id: 196,
      nombre: 'Temuco',
      idRegion: 9
    },
    {
      id: 197,
      nombre: 'Carahue',
      idRegion: 9
    },
    {
      id: 198,
      nombre: 'Cunco',
      idRegion: 9
    },
    {
      id: 199,
      nombre: 'Curarrehue',
      idRegion: 9
    },
    {
      id: 200,
      nombre: 'Freire',
      idRegion: 9
    },
    {
      id: 201,
      nombre: 'Galvarino',
      idRegion: 9
    },
    {
      id: 202,
      nombre: 'Gorbea',
      idRegion: 9
    },
    {
      id: 203,
      nombre: 'Lautaro',
      idRegion: 9
    },
    {
      id: 204,
      nombre: 'Loncoche',
      idRegion: 9
    },
    {
      id: 205,
      nombre: 'Melipeuco',
      idRegion: 9
    },
    {
      id: 206,
      nombre: 'Nueva Imperial',
      idRegion: 9
    },
    {
      id: 207,
      nombre: 'Padre las Casas',
      idRegion: 9
    },
    {
      id: 208,
      nombre: 'Perquenco',
      idRegion: 9
    },
    {
      id: 209,
      nombre: 'Pitrufquén',
      idRegion: 9
    },
    {
      id: 210,
      nombre: 'Pucón',
      idRegion: 9
    },
    {
      id: 211,
      nombre: 'Saavedra',
      idRegion: 9
    },
    {
      id: 212,
      nombre: 'Teodoro Schmidt',
      idRegion: 9
    },
    {
      id: 213,
      nombre: 'Toltén',
      idRegion: 9
    },
    {
      id: 214,
      nombre: 'Vilcún',
      idRegion: 9
    },
    {
      id: 215,
      nombre: 'Villarrica',
      idRegion: 9
    },
    {
      id: 216,
      nombre: 'Cholchol',
      idRegion: 9
    },
    {
      id: 217,
      nombre: 'Angol',
      idRegion: 9
    },
    {
      id: 218,
      nombre: 'Collipulli',
      idRegion: 9
    },
    {
      id: 219,
      nombre: 'Curacautín',
      idRegion: 9
    },
    {
      id: 220,
      nombre: 'Ercilla',
      idRegion: 9
    },
    {
      id: 221,
      nombre: 'Lonquimay',
      idRegion: 9
    },
    {
      id: 223,
      nombre: 'Los Sauces',
      idRegion: 9
    },
    {
      id: 224,
      nombre: 'Lumaco',
      idRegion: 9
    },
    {
      id: 225,
      nombre: 'Purén',
      idRegion: 9
    },
    {
      id: 226,
      nombre: 'Renaico',
      idRegion: 9
    },
    {
      id: 227,
      nombre: 'Traiguén',
      idRegion: 9
    },
    {
      id: 228,
      nombre: 'Victoria',
      idRegion: 9
    },
    {
      id: 229,
      nombre: 'Valdivia',
      idRegion: 10
    },
    {
      id: 230,
      nombre: 'Corral',
      idRegion: 10
    },
    {
      id: 231,
      nombre: 'Lanco',
      idRegion: 10
    },
    {
      id: 232,
      nombre: 'Los Lagos',
      idRegion: 10
    },
    {
      id: 233,
      nombre: 'Máfil',
      idRegion: 10
    },
    {
      id: 234,
      nombre: 'Mariquina',
      idRegion: 10
    },
    {
      id: 235,
      nombre: 'Paillaco',
      idRegion: 10
    },
    {
      id: 236,
      nombre: 'Panguipulli',
      idRegion: 10
    },
    {
      id: 237,
      nombre: 'La Unión',
      idRegion: 10
    },
    {
      id: 238,
      nombre: 'Futrono',
      idRegion: 10
    },
    {
      id: 239,
      nombre: 'Lago Ranco',
      idRegion: 10
    },
    {
      id: 240,
      nombre: 'Río Bueno',
      idRegion: 10
    },
    {
      id: 241,
      nombre: 'Puerto Montt',
      idRegion: 11
    },
    {
      id: 242,
      nombre: 'Calbuco',
      idRegion: 11
    },
    {
      id: 243,
      nombre: 'Cochamó',
      idRegion: 11
    },
    {
      id: 244,
      nombre: 'Fresia',
      idRegion: 11
    },
    {
      id: 245,
      nombre: 'Frutillar',
      idRegion: 11
    },
    {
      id: 246,
      nombre: 'Los Muermos',
      idRegion: 11
    },
    {
      id: 247,
      nombre: 'Llanquihue',
      idRegion: 11
    },
    {
      id: 248,
      nombre: 'Maullín',
      idRegion: 11
    },
    {
      id: 249,
      nombre: 'Puerto Varas',
      idRegion: 11
    },
    {
      id: 250,
      nombre: 'Castro',
      idRegion: 11
    },
    {
      id: 251,
      nombre: 'Ancud',
      idRegion: 11
    },
    {
      id: 252,
      nombre: 'Chonchi',
      idRegion: 11
    },
    {
      id: 253,
      nombre: 'Curaco de Vélez',
      idRegion: 11
    },
    {
      id: 254,
      nombre: 'Dalcahue',
      idRegion: 11
    },
    {
      id: 255,
      nombre: 'Puqueldón',
      idRegion: 11
    },
    {
      id: 256,
      nombre: 'Queilén',
      idRegion: 11
    },
    {
      id: 257,
      nombre: 'Quellón',
      idRegion: 11
    },
    {
      id: 258,
      nombre: 'Quemchi',
      idRegion: 11
    },
    {
      id: 259,
      nombre: 'Quinchao',
      idRegion: 11
    },
    {
      id: 260,
      nombre: 'Osorno',
      idRegion: 11
    },
    {
      id: 261,
      nombre: 'Puerto Octay',
      idRegion: 11
    },
    {
      id: 262,
      nombre: 'Purranque',
      idRegion: 11
    },
    {
      id: 263,
      nombre: 'Puyehue',
      idRegion: 11
    },
    {
      id: 264,
      nombre: 'Río Negro',
      idRegion: 11
    },
    {
      id: 265,
      nombre: 'San Juan de la Costa',
      idRegion: 11
    },
    {
      id: 266,
      nombre: 'San Pablo',
      idRegion: 11
    },
    {
      id: 267,
      nombre: 'Chaitén',
      idRegion: 11
    },
    {
      id: 268,
      nombre: 'Futaleufú',
      idRegion: 11
    },
    {
      id: 269,
      nombre: 'Hualaihué',
      idRegion: 11
    },
    {
      id: 270,
      nombre: 'Palena',
      idRegion: 11
    },
    {
      id: 271,
      nombre: 'Coihaique',
      idRegion: 12
    },
    {
      id: 272,
      nombre: 'Lago Verde',
      idRegion: 12
    },
    {
      id: 273,
      nombre: 'Aisén',
      idRegion: 12
    },
    {
      id: 274,
      nombre: 'Cisnes',
      idRegion: 12
    },
    {
      id: 275,
      nombre: 'Guaitecas',
      idRegion: 12
    },
    {
      id: 276,
      nombre: 'Cochrane',
      idRegion: 12
    },
    {
      id: 277,
      nombre: 'O’Higgins',
      idRegion: 12
    },
    {
      id: 278,
      nombre: 'Tortel',
      idRegion: 12
    },
    {
      id: 279,
      nombre: 'Chile Chico',
      idRegion: 12
    },
    {
      id: 280,
      nombre: 'Río Ibáñez',
      idRegion: 12
    },
    {
      id: 281,
      nombre: 'Punta Arenas',
      idRegion: 13
    },
    {
      id: 282,
      nombre: 'Laguna Blanca',
      idRegion: 13
    },
    {
      id: 283,
      nombre: 'Río Verde',
      idRegion: 13
    },
    {
      id: 284,
      nombre: 'San Gregorio',
      idRegion: 13
    },
    {
      id: 285,
      nombre: 'Cabo de Hornos (Ex Navarino)',
      idRegion: 13
    },
    {
      id: 281,
      nombre: 'Antártica',
      idRegion: 13
    },
    {
      id: 282,
      nombre: 'Porvenir',
      idRegion: 13
    },
    {
      id: 283,
      nombre: 'Primavera',
      idRegion: 13
    },
    {
      id: 284,
      nombre: 'Timaukel',
      idRegion: 13
    },
    {
      id: 285,
      nombre: 'Natales',
      idRegion: 13
    },
    {
      id: 286,
      nombre: 'Torres del Paine',
      idRegion: 13
    },
    {
      id: 287,
      nombre: 'Cerrillos',
      idRegion: 14
    },
    {
      id: 288,
      nombre: 'Cerro Navia',
      idRegion: 14
    },
    {
      id: 289,
      nombre: 'Conchalí',
      idRegion: 14
    },
    {
      id: 290,
      nombre: 'El Bosque',
      idRegion: 14
    },
    {
      id: 291,
      nombre: 'Estación Central',
      idRegion: 14
    },
    {
      id: 292,
      nombre: 'Huechuraba',
      idRegion: 14
    },
    {
      id: 293,
      nombre: 'Independencia',
      idRegion: 14
    },
    {
      id: 294,
      nombre: 'La Cisterna',
      idRegion: 14
    },
    {
      id: 295,
      nombre: 'La Florida',
      idRegion: 14
    },
    {
      id: 296,
      nombre: 'La Granja',
      idRegion: 14
    },
    {
      id: 297,
      nombre: 'La Pintana',
      idRegion: 14
    },
    {
      id: 298,
      nombre: 'Las Condes',
      idRegion: 14
    },
    {
      id: 299,
      nombre: 'La Reina',
      idRegion: 14
    },
    {
      id: 300,
      nombre: 'Lo Barnechea',
      idRegion: 14
    },
    {
      id: 301,
      nombre: 'Lo Espejo',
      idRegion: 14
    },
    {
      id: 302,
      nombre: 'Lo Prado',
      idRegion: 14
    },
    {
      id: 303,
      nombre: 'Macul',
      idRegion: 14
    },
    {
      id: 304,
      nombre: 'Maipú',
      idRegion: 14
    },
    {
      id: 305,
      nombre: 'Ñuñoa',
      idRegion: 14
    },
    {
      id: 306,
      nombre: 'Pedro Aguirre Cerda',
      idRegion: 14
    },
    {
      id: 307,
      nombre: 'Peñalolén',
      idRegion: 14
    },
    {
      id: 308,
      nombre: 'Providencia',
      idRegion: 14
    },
    {
      id: 309,
      nombre: 'Pudahuel',
      idRegion: 14
    },
    {
      id: 310,
      nombre: 'Quilicura',
      idRegion: 14
    },
    {
      id: 311,
      nombre: 'Quinta Normal',
      idRegion: 14
    },
    {
      id: 312,
      nombre: 'Recoleta',
      idRegion: 14
    },
    {
      id: 313,
      nombre: 'Renca',
      idRegion: 14
    },
    {
      id: 314,
      nombre: 'San Joaquín',
      idRegion: 14
    },
    {
      id: 315,
      nombre: 'San Miguel',
      idRegion: 14
    },
    {
      id: 316,
      nombre: 'San Ramón',
      idRegion: 14
    },
    {
      id: 317,
      nombre: 'Vitacura',
      idRegion: 14
    },
    {
      id: 318,
      nombre: 'Puente Alto',
      idRegion: 14
    },
    {
      id: 319,
      nombre: 'Pirque',
      idRegion: 14
    },
    {
      id: 320,
      nombre: 'San José de Maipo',
      idRegion: 14
    },
    {
      id: 321,
      nombre: 'Colina',
      idRegion: 14
    },
    {
      id: 323,
      nombre: 'Lampa',
      idRegion: 14
    },
    {
      id: 324,
      nombre: 'Tiltil',
      idRegion: 14
    },
    {
      id: 325,
      nombre: 'San Bernardo',
      idRegion: 14
    },
    {
      id: 326,
      nombre: 'Buin',
      idRegion: 14
    },
    {
      id: 327,
      nombre: 'Calera de Tango',
      idRegion: 14
    },
    {
      id: 328,
      nombre: 'Paine',
      idRegion: 14
    },
    {
      id: 329,
      nombre: 'Melipilla',
      idRegion: 14
    },
    {
      id: 330,
      nombre: 'Alhué',
      idRegion: 14
    },
    {
      id: 331,
      nombre: 'Curacaví',
      idRegion: 14
    },
    {
      id: 332,
      nombre: 'María Pinto',
      idRegion: 14
    },
    {
      id: 333,
      nombre: 'San Pedro',
      idRegion: 14
    },
    {
      id: 334,
      nombre: 'Talagante',
      idRegion: 14
    },
    {
      id: 335,
      nombre: 'El Monte',
      idRegion: 14
    },
    {
      id: 336,
      nombre: 'Isla de Maipo',
      idRegion: 14
    },
    {
      id: 337,
      nombre: 'Padre Hurtado',
      idRegion: 14
    },
    {
      id: 338,
      nombre: 'Peñaflor',
      idRegion: 14
    }
  ];

  private regiones: any[] = [
    {
      id: 0,
      nombre: 'Arica y Parinacota',
    },
    {
      id: 1,
      nombre: 'Tarapacá',
    },
    {
      id: 2,
      nombre: 'Antofagasta',
    },
    {
      id: 3,
      nombre: 'Atacama',
    },
    {
      id: 4,
      nombre: 'Coquimbo',
    },
    {
      id: 5,
      nombre: 'Valparaíso',
    },
    {
      id: 6,
      nombre: 'Región del Libertador Gral. Bernardo O’Higgins',
    },
    {
      id: 7,
      nombre: 'Región del Maule',
    },
    {
      id: 8,
      nombre: 'Región del Biobío',
    },
    {
      id: 9,
      nombre: 'Región de la Araucanía',
    },
    {
      id: 10,
      nombre: 'Región de Los Ríos',
    },
    {
      id: 11,
      nombre: 'Región de Los Lagos',
    },
    {
      id: 12,
      nombre: 'Región Aisén del Gral. Carlos Ibáñez del Campo',
    },
    {
      id: 13,
      nombre: 'Región de Magallanes y de la Antártica Chilena',
    },
    {
      id: 14,
      nombre: 'Región Metropolitana de Santiago',
    }
  ];

  constructor() {
  }

  getRegiones(): any[] {
    return this.regiones;
  }

  getComunas(): any[] {
    return this.comunas;
  }

}
