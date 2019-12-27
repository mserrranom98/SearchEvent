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
      region: 0
    },
    {
      id: 1,
      nombre: 'Camarones',
      region: 0
    },
    {
      id: 2,
      nombre: 'Putre',
      region: 0
    },
    {
      id: 3,
      nombre: 'General Lagos',
      region: 0
    },
    {
      id: 4,
      nombre: 'Iquique',
      region: 1
    },
    {
      id: 5,
      nombre: 'Alto Hospicio',
      region: 1
    },
    {
      id: 6,
      nombre: 'Pozo Almonte',
      region: 1
    },
    {
      id: 7,
      nombre: 'Camiña',
      region: 1
    },
    {
      id: 8,
      nombre: 'Colchane',
      region: 1
    },
    {
      id: 9,
      nombre: 'Huara',
      region: 1
    },
    {
      id: 10,
      nombre: 'Pica',
      region: 1
    },
    {
      id: 11,
      nombre: 'Antofagasta',
      region: 2
    },
    {
      id: 12,
      nombre: 'Mejillones',
      region: 2
    },
    {
      id: 13,
      nombre: 'Sierra Gorda',
      region: 2
    },
    {
      id: 14,
      nombre: 'Taltal',
      region: 2
    },
    {
      id: 15,
      nombre: 'Calama',
      region: 2
    },
    {
      id: 16,
      nombre: 'Ollagüe',
      region: 2
    },
    {
      id: 17,
      nombre: 'San Pedro de Atacama',
      region: 2
    },
    {
      id: 18,
      nombre: 'Tocopilla',
      region: 2
    },
    {
      id: 19,
      nombre: 'María Elena',
      region: 2
    },
    {
      id: 20,
      nombre: 'Copiapó',
      region: 3
    },
    {
      id: 21,
      nombre: 'Caldera',
      region: 3
    },
    {
      id: 22,
      nombre: 'Tierra Amarilla',
      region: 3
    },
    {
      id: 23,
      nombre: 'Chañaral',
      region: 3
    },
    {
      id: 24,
      nombre: 'Diego de Almagro',
      region: 3
    },
    {
      id: 25,
      nombre: 'Vallenar',
      region: 3
    },
    {
      id: 26,
      nombre: 'Alto del Carmen',
      region: 3
    },
    {
      id: 27,
      nombre: 'Freirina',
      region: 3
    },
    {
      id: 28,
      nombre: 'Huasco',
      region: 3
    },
    {
      id: 29,
      nombre: 'La Serena',
      region: 4
    },
    {
      id: 30,
      nombre: 'Coquimbo',
      region: 4
    },
    {
      id: 31,
      nombre: 'Andacollo',
      region: 4
    },
    {
      id: 32,
      nombre: 'La Higuera',
      region: 4
    },
    {
      id: 33,
      nombre: 'Paiguano',
      region: 4
    },
    {
      id: 34,
      nombre: 'Vicuña',
      region: 4
    },
    {
      id: 35,
      nombre: 'Illapel',
      region: 4
    },
    {
      id: 36,
      nombre: 'Canela',
      region: 4
    },
    {
      id: 37,
      nombre: 'Los Vilos',
      region: 4
    },
    {
      id: 38,
      nombre: 'Salamanca',
      region: 4
    },
    {
      id: 39,
      nombre: 'Ovalle',
      region: 4
    },
    {
      id: 40,
      nombre: 'Combarbalá',
      region: 4
    },
    {
      id: 41,
      nombre: 'Monte Patria',
      region: 4
    },
    {
      id: 42,
      nombre: 'Punitaqui',
      region: 4
    },
    {
      id: 43,
      nombre: 'Río Hurtado',
      region: 4
    },
    {
      id: 44,
      nombre: 'Valparaíso',
      region: 5
    },
    {
      id: 45,
      nombre: 'Casablanca',
      region: 5
    },
    {
      id: 46,
      nombre: 'Concón',
      region: 5
    },
    {
      id: 47,
      nombre: 'Juan Fernández',
      region: 5
    },
    {
      id: 48,
      nombre: 'Puchuncaví',
      region: 5
    },
    {
      id: 49,
      nombre: 'Quintero',
      region: 5
    },
    {
      id: 50,
      nombre: 'Viña del Mar',
      region: 5
    },
    {
      id: 51,
      nombre: 'Isla de Pascua',
      region: 5
    },
    {
      id: 52,
      nombre: 'Los Andes',
      region: 5
    },
    {
      id: 53,
      nombre: 'Calle Larga',
      region: 5
    },
    {
      id: 53,
      nombre: 'Rinconada',
      region: 5
    },
    {
      id: 54,
      nombre: 'San Esteban',
      region: 5
    },
    {
      id: 55,
      nombre: 'La Ligua',
      region: 5
    },
    {
      id: 56,
      nombre: 'Cabildo',
      region: 5
    },
    {
      id: 57,
      nombre: 'Papudo',
      region: 5
    },
    {
      id: 58,
      nombre: 'Petorca',
      region: 5
    },
    {
      id: 59,
      nombre: 'Zapallar',
      region: 5
    },
    {
      id: 60,
      nombre: 'Quillota',
      region: 5
    },
    {
      id: 61,
      nombre: 'Calera',
      region: 5
    },
    {
      id: 62,
      nombre: 'Hijuelas',
      region: 5
    },
    {
      id: 63,
      nombre: 'La Cruz',
      region: 5
    },
    {
      id: 64,
      nombre: 'Nogales',
      region: 5
    },
    {
      id: 65,
      nombre: 'San Antonio',
      region: 5
    },
    {
      id: 66,
      nombre: 'Algarrobo',
      region: 5
    },
    {
      id: 67,
      nombre: 'Cartagena',
      region: 5
    },
    {
      id: 68,
      nombre: 'El Quisco',
      region: 5
    },
    {
      id: 69,
      nombre: 'El Tabo',
      region: 5
    },
    {
      id: 70,
      nombre: 'Santo Domingo',
      region: 5
    },
    {
      id: 71,
      nombre: 'San Felipe',
      region: 5
    },
    {
      id: 72,
      nombre: 'Catemu',
      region: 5
    },
    {
      id: 73,
      nombre: 'Llaillay',
      region: 5
    },
    {
      id: 74,
      nombre: 'Panquehue',
      region: 5
    },
    {
      id: 75,
      nombre: 'Putaendo',
      region: 5
    },
    {
      id: 76,
      nombre: 'Santa María',
      region: 5
    },
    {
      id: 77,
      nombre: 'Quilpué',
      region: 5
    },
    {
      id: 78,
      nombre: 'Limache',
      region: 5
    },
    {
      id: 79,
      nombre: 'Villa Alemana',
      region: 5
    },
    {
      id: 80,
      nombre: 'Olmué',
      region: 5
    },
    {
      id: 81,
      nombre: 'Rancagua',
      region: 6
    },
    {
      id: 82,
      nombre: 'Codegua',
      region: 6
    },
    {
      id: 83,
      nombre: 'Coinco',
      region: 6
    },
    {
      id: 84,
      nombre: 'Coltauco',
      region: 6
    },
    {
      id: 85,
      nombre: 'Doñihue',
      region: 6
    },
    {
      id: 86,
      nombre: 'Graneros',
      region: 6
    },
    {
      id: 87,
      nombre: 'Las Cabras',
      region: 6
    },
    {
      id: 88,
      nombre: 'Machalí',
      region: 6
    },
    {
      id: 89,
      nombre: 'Malloa',
      region: 6
    },
    {
      id: 90,
      nombre: 'Mostazal',
      region: 6
    },
    {
      id: 91,
      nombre: 'Olivar',
      region: 6
    },
    {
      id: 92,
      nombre: 'Peumo',
      region: 6
    },
    {
      id: 93,
      nombre: 'Pichidegua',
      region: 6
    },
    {
      id: 94,
      nombre: 'Quinta de Tilcoco',
      region: 6
    },
    {
      id: 95,
      nombre: 'Rengo',
      region: 6
    },
    {
      id: 96,
      nombre: 'Requínoa',
      region: 6
    },
    {
      id: 97,
      nombre: 'San Vicente',
      region: 6
    },
    {
      id: 98,
      nombre: 'Pichilemu',
      region: 6
    },
    {
      id: 99,
      nombre: 'La Estrella',
      region: 6
    },
    {
      id: 100,
      nombre: 'Litueche',
      region: 6
    },
    {
      id: 101,
      nombre: 'Marchihue',
      region: 6
    },
    {
      id: 102,
      nombre: 'Navidad',
      region: 6
    },
    {
      id: 103,
      nombre: 'Paredones',
      region: 6
    },
    {
      id: 104,
      nombre: 'San Fernando',
      region: 6
    },
    {
      id: 105,
      nombre: 'Chépica',
      region: 6
    },
    {
      id: 106,
      nombre: 'Chimbarongo',
      region: 6
    },
    {
      id: 107,
      nombre: 'Lolol',
      region: 6
    },
    {
      id: 108,
      nombre: 'Nancagua',
      region: 6
    },
    {
      id: 107,
      nombre: 'Palmilla',
      region: 6
    },
    {
      id: 108,
      nombre: 'Peralillo',
      region: 6
    },
    {
      id: 109,
      nombre: 'Placilla',
      region: 6
    },
    {
      id: 110,
      nombre: 'Pumanque',
      region: 6
    },
    {
      id: 111,
      nombre: 'Santa Cruz',
      region: 6
    },
    {
      id: 112,
      nombre: 'Talca',
      region: 7
    },
    {
      id: 113,
      nombre: 'Constitución',
      region: 7
    },
    {
      id: 114,
      nombre: 'Curepto',
      region: 7
    },
    {
      id: 115,
      nombre: 'Empedrado',
      region: 7
    },
    {
      id: 116,
      nombre: 'Maule',
      region: 7
    },
    {
      id: 117,
      nombre: 'Pelarco',
      region: 7
    },
    {
      id: 118,
      nombre: 'Pencahue',
      region: 7
    },
    {
      id: 119,
      nombre: 'Río Claro',
      region: 7
    },
    {
      id: 120,
      nombre: 'San Clemente',
      region: 7
    },
    {
      id: 121,
      nombre: 'San Rafael',
      region: 7
    },
    {
      id: 122,
      nombre: 'Cauquenes',
      region: 7
    },
    {
      id: 123,
      nombre: 'Chanco',
      region: 7
    },
    {
      id: 124,
      nombre: 'Pelluhue',
      region: 7
    },
    {
      id: 125,
      nombre: 'Curicó',
      region: 7
    },
    {
      id: 126,
      nombre: 'Hualañé',
      region: 7
    },
    {
      id: 127,
      nombre: 'Licantén',
      region: 7
    },
    {
      id: 128,
      nombre: 'Molina',
      region: 7
    },
    {
      id: 129,
      nombre: 'Rauco',
      region: 7
    },
    {
      id: 130,
      nombre: 'Romeral',
      region: 7
    },
    {
      id: 131,
      nombre: 'Sagrada Familia',
      region: 7
    },
    {
      id: 132,
      nombre: 'Teno',
      region: 7
    },
    {
      id: 133,
      nombre: 'Vichuquén',
      region: 7
    },
    {
      id: 134,
      nombre: 'Linares',
      region: 7
    },
    {
      id: 135,
      nombre: 'Colbún',
      region: 7
    },
    {
      id: 136,
      nombre: 'Longaví',
      region: 7
    },
    {
      id: 137,
      nombre: 'Parral',
      region: 7
    },
    {
      id: 138,
      nombre: 'ReVro',
      region: 7
    },
    {
      id: 139,
      nombre: 'San Javier',
      region: 7
    },
    {
      id: 140,
      nombre: 'Villa Alegre',
      region: 7
    },
    {
      id: 141,
      nombre: 'Yerbas Buenas',
      region: 7
    },
    {
      id: 142,
      nombre: 'Concepción',
      region: 8
    },
    {
      id: 143,
      nombre: 'Coronel',
      region: 8
    },
    {
      id: 144,
      nombre: 'Chiguayante',
      region: 8
    },
    {
      id: 145,
      nombre: 'Florida',
      region: 8
    },
    {
      id: 146,
      nombre: 'Hualqui',
      region: 8
    },
    {
      id: 147,
      nombre: 'Lota',
      region: 8
    },
    {
      id: 148,
      nombre: 'Penco',
      region: 8
    },
    {
      id: 149,
      nombre: 'San Pedro de la Paz',
      region: 8
    },
    {
      id: 150,
      nombre: 'Santa Juana',
      region: 8
    },
    {
      id: 151,
      nombre: 'Talcahuano',
      region: 8
    },
    {
      id: 152,
      nombre: 'Tomé',
      region: 8
    },
    {
      id: 153,
      nombre: 'Hualpén',
      region: 8
    },
    {
      id: 154,
      nombre: 'Lebu',
      region: 8
    },
    {
      id: 155,
      nombre: 'Arauco',
      region: 8
    },
    {
      id: 156,
      nombre: 'Cañete',
      region: 8
    },
    {
      id: 157,
      nombre: 'Contulmo',
      region: 8
    },
    {
      id: 158,
      nombre: 'Curanilahue',
      region: 8
    },
    {
      id: 159,
      nombre: 'Los Álamos',
      region: 8
    },
    {
      id: 160,
      nombre: 'Tirúa',
      region: 8
    },
    {
      id: 161,
      nombre: 'Los Ángeles',
      region: 8
    },
    {
      id: 162,
      nombre: 'Antuco',
      region: 8
    },
    {
      id: 163,
      nombre: 'Cabrero',
      region: 8
    },
    {
      id: 164,
      nombre: 'Laja',
      region: 8
    },
    {
      id: 165,
      nombre: 'Mulchén',
      region: 8
    },
    {
      id: 166,
      nombre: 'Nacimiento',
      region: 8
    },
    {
      id: 167,
      nombre: 'Negrete',
      region: 8
    },
    {
      id: 168,
      nombre: 'Quilaco',
      region: 8
    },
    {
      id: 169,
      nombre: 'Quilleco',
      region: 8
    },
    {
      id: 170,
      nombre: 'San Rosendo',
      region: 8
    },
    {
      id: 171,
      nombre: 'Santa Bárbara',
      region: 8
    },
    {
      id: 172,
      nombre: 'Tucapel',
      region: 8
    },
    {
      id: 173,
      nombre: 'Yumbel',
      region: 8
    },
    {
      id: 174,
      nombre: 'Alto Biobío',
      region: 8
    },
    {
      id: 175,
      nombre: 'Chillán',
      region: 8
    },
    {
      id: 176,
      nombre: 'Bulnes',
      region: 8
    },
    {
      id: 177,
      nombre: 'Cobquecura',
      region: 8
    },
    {
      id: 178,
      nombre: 'Coelemu',
      region: 8
    },
    {
      id: 179,
      nombre: 'Coihueco',
      region: 8
    },
    {
      id: 180,
      nombre: 'Chillán Viejo',
      region: 8
    },
    {
      id: 181,
      nombre: 'El Carmen',
      region: 8
    },
    {
      id: 182,
      nombre: 'Ninhue',
      region: 8
    },
    {
      id: 183,
      nombre: 'Ñiquén',
      region: 8
    },
    {
      id: 184,
      nombre: 'Pemuco',
      region: 8
    },
    {
      id: 185,
      nombre: 'Pinto',
      region: 8
    },
    {
      id: 186,
      nombre: 'Portezuelo',
      region: 8
    },
    {
      id: 187,
      nombre: 'Quillón',
      region: 8
    },
    {
      id: 188,
      nombre: 'Quirihue',
      region: 8
    },
    {
      id: 189,
      nombre: 'Ránquil',
      region: 8
    },
    {
      id: 190,
      nombre: 'San Carlos',
      region: 8
    },
    {
      id: 191,
      nombre: 'San Fabián',
      region: 8
    },
    {
      id: 192,
      nombre: 'San Ignacio',
      region: 8
    },
    {
      id: 193,
      nombre: 'San Nicolás',
      region: 8
    },
    {
      id: 194,
      nombre: 'Treguaco',
      region: 8
    },
    {
      id: 195,
      nombre: 'Yungay',
      region: 8
    },
    {
      id: 196,
      nombre: 'Temuco',
      region: 9
    },
    {
      id: 197,
      nombre: 'Carahue',
      region: 9
    },
    {
      id: 198,
      nombre: 'Cunco',
      region: 9
    },
    {
      id: 199,
      nombre: 'Curarrehue',
      region: 9
    },
    {
      id: 200,
      nombre: 'Freire',
      region: 9
    },
    {
      id: 201,
      nombre: 'Galvarino',
      region: 9
    },
    {
      id: 202,
      nombre: 'Gorbea',
      region: 9
    },
    {
      id: 203,
      nombre: 'Lautaro',
      region: 9
    },
    {
      id: 204,
      nombre: 'Loncoche',
      region: 9
    },
    {
      id: 205,
      nombre: 'Melipeuco',
      region: 9
    },
    {
      id: 206,
      nombre: 'Nueva Imperial',
      region: 9
    },
    {
      id: 207,
      nombre: 'Padre las Casas',
      region: 9
    },
    {
      id: 208,
      nombre: 'Perquenco',
      region: 9
    },
    {
      id: 209,
      nombre: 'Pitrufquén',
      region: 9
    },
    {
      id: 210,
      nombre: 'Pucón',
      region: 9
    },
    {
      id: 211,
      nombre: 'Saavedra',
      region: 9
    },
    {
      id: 212,
      nombre: 'Teodoro Schmidt',
      region: 9
    },
    {
      id: 213,
      nombre: 'Toltén',
      region: 9
    },
    {
      id: 214,
      nombre: 'Vilcún',
      region: 9
    },
    {
      id: 215,
      nombre: 'Villarrica',
      region: 9
    },
    {
      id: 216,
      nombre: 'Cholchol',
      region: 9
    },
    {
      id: 217,
      nombre: 'Angol',
      region: 9
    },
    {
      id: 218,
      nombre: 'Collipulli',
      region: 9
    },
    {
      id: 219,
      nombre: 'Curacautín',
      region: 9
    },
    {
      id: 220,
      nombre: 'Ercilla',
      region: 9
    },
    {
      id: 221,
      nombre: 'Lonquimay',
      region: 9
    },
    {
      id: 223,
      nombre: 'Los Sauces',
      region: 9
    },
    {
      id: 224,
      nombre: 'Lumaco',
      region: 9
    },
    {
      id: 225,
      nombre: 'Purén',
      region: 9
    },
    {
      id: 226,
      nombre: 'Renaico',
      region: 9
    },
    {
      id: 227,
      nombre: 'Traiguén',
      region: 9
    },
    {
      id: 228,
      nombre: 'Victoria',
      region: 9
    },
    {
      id: 229,
      nombre: 'Valdivia',
      region: 10
    },
    {
      id: 230,
      nombre: 'Corral',
      region: 10
    },
    {
      id: 231,
      nombre: 'Lanco',
      region: 10
    },
    {
      id: 232,
      nombre: 'Los Lagos',
      region: 10
    },
    {
      id: 233,
      nombre: 'Máfil',
      region: 10
    },
    {
      id: 234,
      nombre: 'Mariquina',
      region: 10
    },
    {
      id: 235,
      nombre: 'Paillaco',
      region: 10
    },
    {
      id: 236,
      nombre: 'Panguipulli',
      region: 10
    },
    {
      id: 237,
      nombre: 'La Unión',
      region: 10
    },
    {
      id: 238,
      nombre: 'Futrono',
      region: 10
    },
    {
      id: 239,
      nombre: 'Lago Ranco',
      region: 10
    },
    {
      id: 240,
      nombre: 'Río Bueno',
      region: 10
    },
    {
      id: 241,
      nombre: 'Puerto Montt',
      region: 11
    },
    {
      id: 242,
      nombre: 'Calbuco',
      region: 11
    },
    {
      id: 243,
      nombre: 'Cochamó',
      region: 11
    },
    {
      id: 244,
      nombre: 'Fresia',
      region: 11
    },
    {
      id: 245,
      nombre: 'Frutillar',
      region: 11
    },
    {
      id: 246,
      nombre: 'Los Muermos',
      region: 11
    },
    {
      id: 247,
      nombre: 'Llanquihue',
      region: 11
    },
    {
      id: 248,
      nombre: 'Maullín',
      region: 11
    },
    {
      id: 249,
      nombre: 'Puerto Varas',
      region: 11
    },
    {
      id: 250,
      nombre: 'Castro',
      region: 11
    },
    {
      id: 251,
      nombre: 'Ancud',
      region: 11
    },
    {
      id: 252,
      nombre: 'Chonchi',
      region: 11
    },
    {
      id: 253,
      nombre: 'Curaco de Vélez',
      region: 11
    },
    {
      id: 254,
      nombre: 'Dalcahue',
      region: 11
    },
    {
      id: 255,
      nombre: 'Puqueldón',
      region: 11
    },
    {
      id: 256,
      nombre: 'Queilén',
      region: 11
    },
    {
      id: 257,
      nombre: 'Quellón',
      region: 11
    },
    {
      id: 258,
      nombre: 'Quemchi',
      region: 11
    },
    {
      id: 259,
      nombre: 'Quinchao',
      region: 11
    },
    {
      id: 260,
      nombre: 'Osorno',
      region: 11
    },
    {
      id: 261,
      nombre: 'Puerto Octay',
      region: 11
    },
    {
      id: 262,
      nombre: 'Purranque',
      region: 11
    },
    {
      id: 263,
      nombre: 'Puyehue',
      region: 11
    },
    {
      id: 264,
      nombre: 'Río Negro',
      region: 11
    },
    {
      id: 265,
      nombre: 'San Juan de la Costa',
      region: 11
    },
    {
      id: 266,
      nombre: 'San Pablo',
      region: 11
    },
    {
      id: 267,
      nombre: 'Chaitén',
      region: 11
    },
    {
      id: 268,
      nombre: 'Futaleufú',
      region: 11
    },
    {
      id: 269,
      nombre: 'Hualaihué',
      region: 11
    },
    {
      id: 270,
      nombre: 'Palena',
      region: 11
    },
    {
      id: 271,
      nombre: 'Coihaique',
      region: 12
    },
    {
      id: 272,
      nombre: 'Lago Verde',
      region: 12
    },
    {
      id: 273,
      nombre: 'Aisén',
      region: 12
    },
    {
      id: 274,
      nombre: 'Cisnes',
      region: 12
    },
    {
      id: 275,
      nombre: 'Guaitecas',
      region: 12
    },
    {
      id: 276,
      nombre: 'Cochrane',
      region: 12
    },
    {
      id: 277,
      nombre: 'O’Higgins',
      region: 12
    },
    {
      id: 278,
      nombre: 'Tortel',
      region: 12
    },
    {
      id: 279,
      nombre: 'Chile Chico',
      region: 12
    },
    {
      id: 280,
      nombre: 'Río Ibáñez',
      region: 12
    },
    {
      id: 281,
      nombre: 'Punta Arenas',
      region: 13
    },
    {
      id: 282,
      nombre: 'Laguna Blanca',
      region: 13
    },
    {
      id: 283,
      nombre: 'Río Verde',
      region: 13
    },
    {
      id: 284,
      nombre: 'San Gregorio',
      region: 13
    },
    {
      id: 285,
      nombre: 'Cabo de Hornos (Ex Navarino)',
      region: 13
    },
    {
      id: 281,
      nombre: 'Antártica',
      region: 13
    },
    {
      id: 282,
      nombre: 'Porvenir',
      region: 13
    },
    {
      id: 283,
      nombre: 'Primavera',
      region: 13
    },
    {
      id: 284,
      nombre: 'Timaukel',
      region: 13
    },
    {
      id: 285,
      nombre: 'Natales',
      region: 13
    },
    {
      id: 286,
      nombre: 'Torres del Paine',
      region: 13
    },
    {
      id: 287,
      nombre: 'Cerrillos',
      region: 14
    },
    {
      id: 288,
      nombre: 'Cerro Navia',
      region: 14
    },
    {
      id: 289,
      nombre: 'Conchalí',
      region: 14
    },
    {
      id: 290,
      nombre: 'El Bosque',
      region: 14
    },
    {
      id: 291,
      nombre: 'Estación Central',
      region: 14
    },
    {
      id: 292,
      nombre: 'Huechuraba',
      region: 14
    },
    {
      id: 293,
      nombre: 'Independencia',
      region: 14
    },
    {
      id: 294,
      nombre: 'La Cisterna',
      region: 14
    },
    {
      id: 295,
      nombre: 'La Florida',
      region: 14
    },
    {
      id: 296,
      nombre: 'La Granja',
      region: 14
    },
    {
      id: 297,
      nombre: 'La Pintana',
      region: 14
    },
    {
      id: 298,
      nombre: 'Las Condes',
      region: 14
    },
    {
      id: 299,
      nombre: 'La Reina',
      region: 14
    },
    {
      id: 300,
      nombre: 'Lo Barnechea',
      region: 14
    },
    {
      id: 301,
      nombre: 'Lo Espejo',
      region: 14
    },
    {
      id: 302,
      nombre: 'Lo Prado',
      region: 14
    },
    {
      id: 303,
      nombre: 'Macul',
      region: 14
    },
    {
      id: 304,
      nombre: 'Maipú',
      region: 14
    },
    {
      id: 305,
      nombre: 'Ñuñoa',
      region: 14
    },
    {
      id: 306,
      nombre: 'Pedro Aguirre Cerda',
      region: 14
    },
    {
      id: 307,
      nombre: 'Peñalolén',
      region: 14
    },
    {
      id: 308,
      nombre: 'Providencia',
      region: 14
    },
    {
      id: 309,
      nombre: 'Pudahuel',
      region: 14
    },
    {
      id: 310,
      nombre: 'Quilicura',
      region: 14
    },
    {
      id: 311,
      nombre: 'Quinta Normal',
      region: 14
    },
    {
      id: 312,
      nombre: 'Recoleta',
      region: 14
    },
    {
      id: 313,
      nombre: 'Renca',
      region: 14
    },
    {
      id: 314,
      nombre: 'San Joaquín',
      region: 14
    },
    {
      id: 315,
      nombre: 'San Miguel',
      region: 14
    },
    {
      id: 316,
      nombre: 'San Ramón',
      region: 14
    },
    {
      id: 317,
      nombre: 'Vitacura',
      region: 14
    },
    {
      id: 318,
      nombre: 'Puente Alto',
      region: 14
    },
    {
      id: 319,
      nombre: 'Pirque',
      region: 14
    },
    {
      id: 320,
      nombre: 'San José de Maipo',
      region: 14
    },
    {
      id: 321,
      nombre: 'Colina',
      region: 14
    },
    {
      id: 323,
      nombre: 'Lampa',
      region: 14
    },
    {
      id: 324,
      nombre: 'Tiltil',
      region: 14
    },
    {
      id: 325,
      nombre: 'San Bernardo',
      region: 14
    },
    {
      id: 326,
      nombre: 'Buin',
      region: 14
    },
    {
      id: 327,
      nombre: 'Calera de Tango',
      region: 14
    },
    {
      id: 328,
      nombre: 'Paine',
      region: 14
    },
    {
      id: 329,
      nombre: 'Melipilla',
      region: 14
    },
    {
      id: 330,
      nombre: 'Alhué',
      region: 14
    },
    {
      id: 331,
      nombre: 'Curacaví',
      region: 14
    },
    {
      id: 332,
      nombre: 'María Pinto',
      region: 14
    },
    {
      id: 333,
      nombre: 'San Pedro',
      region: 14
    },
    {
      id: 334,
      nombre: 'Talagante',
      region: 14
    },
    {
      id: 335,
      nombre: 'El Monte',
      region: 14
    },
    {
      id: 336,
      nombre: 'Isla de Maipo',
      region: 14
    },
    {
      id: 337,
      nombre: 'Padre Hurtado',
      region: 14
    },
    {
      id: 338,
      nombre: 'Peñaflor',
      region: 14
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
