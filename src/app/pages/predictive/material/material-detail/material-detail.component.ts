import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions,
  chartExample1,
} from "../../../../variables/charts";

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  public medicines = [{"nome": "BIOTINA 2,5 mg", "arima": 329, "rna": 411, "indicacao": "rna", "precomedio": 29.29},
{"nome": "OCTREOTIDA 30 MG", "arima": 760, "rna": 399, "indicacao": "rna", "precomedio": 6.9},
{"nome": "OLANZAPINA 5MG - LAFEPE 50%", "arima": 524, "rna": 218, "indicacao": "rna", "precomedio": 13.34},
{"nome": "OLANZAPINA 10MG - LAFEPE 50%", "arima": 829, "rna": 730, "indicacao": "rna", "precomedio": 26.46},
{"nome": "PERTUZUMABE, 30 MG-ML, SOLU\u00c7\u00c3O INJ",
  "arima": 822, "rna": 675, "indicacao": "rna", "precomedio": 28.2},
{"nome": "PARICALCITOL 5MG", "arima": 818, "rna": 121, "indicacao": "rna", "precomedio": 16.82},
{"nome": "QUETIAPINA 25MG", "arima": 139, "rna": 303, "indicacao": "rna", "precomedio": 6.02},
{"nome": "QUETIAPINA 100MG", "arima": 951, "rna": 743, "indicacao": "rna", "precomedio": 13.92},
{"nome": "QUETIAPINA 200MG", "arima": 72, "rna": 591, "indicacao": "rna", "precomedio": 17.61},
{"nome": "AZITROMICINA 500 MG", "arima": 669, "rna": 73, "indicacao": "rna", "precomedio": 11.91},
{"nome": "AZITROMICINA 600 MG ", "arima": 870, "rna": 292, "indicacao": "rna", "precomedio": 26.04},
{"nome": "MEGLUMINA ANTIMONIATO 300 MG-ML SOL. INJ.", "arima": 707, "rna": 451, "indicacao": "rna", "precomedio": 6.35},
{"nome": "DOXICICLINA 100MG", "arima": 301, "rna": 939, "indicacao": "rna", "precomedio": 11.59},
{"nome": "ANFOTERICINA B, 5 MG-ML SUSP. INJET\u00c1VEL (COMPLEXO LIP\u00cdDICO)", "arima": 448,
  "rna": 965, "indicacao": "rna", "precomedio": 24.23},
{"nome": "ITRACONAZOL C\u00c1PSULA 100MG", "arima": 125, "rna": 856, "indicacao": "rna", "precomedio": 24.69},
{"nome": "ARTEMETER 200MG\u00a0 + LUMEFANTRINE 120MG - BL. C-24", "arima": 37, "rna": 315, "indicacao": "rna", "precomedio": 22.01},
{"nome": "ARTESUNATO DE S\u00d3DIO 60 MG, P\u00d3 LI\u00d3FILO INJET\u00c1VEL", "arima": 920, "rna": 298, "indicacao": "rna", "precomedio": 9.49},
{"nome": "PRIMAQUINA DIFOSFATO 15 MG", "arima": 562,
  "rna": 974, "indicacao": "rna", "precomedio": 23.48},
{"nome": "PIRIMETAMINA 25MG COMP", "arima": 782, "rna": 246, "indicacao": "rna", "precomedio": 17.6},
{"nome": "CLARITROMICINA COMP. 500 MG", "arima": 965, "rna": 400, "indicacao": "rna", "precomedio": 4.19},
{"nome": "LEVOFLOXACINO 500 MG", "arima": 800, "rna": 581, "indicacao": "rna", "precomedio": 2.5},
{"nome": "LINEZOLIDA 600MG ", "arima": 544, "rna": 644, "indicacao": "rna", "precomedio": 20.31},
{"nome": "TERIZIDONA 250MG",
  "arima": 857, "rna": 350, "indicacao": "rna", "precomedio": 29.5},
{"nome": "ISONIAZIDA COMP 300MG", "arima": 195, "rna": 757, "indicacao": "rna", "precomedio": 28.36},
{"nome": "PIRIDOXINA 50 MG", "arima": 151, "rna": 165, "indicacao": "rna", "precomedio": 6.38},
{"nome": "DOXICICLINA 100MG COMP. DISPERS\u00cdVEL", "arima": 215, "rna": 512, "indicacao": "rna", "precomedio": 13.69},
{"nome": "RIFAMPICINA 150MG + ISONIAZIDA 75MG + PIRAZINAMIDA 400MG + ETAMBUTOL 275MG", "arima": 354, "rna":
  808, "indicacao": "rna", "precomedio": 25.91},
{"nome": "RIFAMPICINA 300MG", "arima": 862, "rna": 528, "indicacao": "rna", "precomedio": 10.18},
{"nome": "ANFOTERICINA B 50mg (Lipossomal) ", "arima": 180, "rna": 251, "indicacao": "rna", "precomedio": 24.84},
{"nome": "CLOROQUINA 150MG", "arima": 375, "rna": 129, "indicacao": "rna", "precomedio": 17.8},
{"nome": "DIETILCARBAMAZINA 50 mg comprimido", "arima": 156, "rna": 65, "indicacao": "rna", "precomedio": 29.47},
{"nome":
  "AMICACINA 250mg", "arima": 99, "rna": 594, "indicacao": "rna", "precomedio": 11.22},
{"nome": "ETAMBUTOL 400MG COMPRIMIDO", "arima": 751, "rna": 769, "indicacao": "rna", "precomedio": 6.47},
{"nome": "RIFAMPICINA 20MG-ML SUSP. ORAL", "arima": 686, "rna": 857, "indicacao": "rna", "precomedio": 24.61},
{"nome": "MINOCICLINA CLORIDRATO 100 MG", "arima": 188, "rna": 135, "indicacao": "rna", "precomedio": 15.48},
{"nome": "PENTOXIFILINA, 400 MG", "arima": 792, "rna": 456, "indicacao":
  "rna", "precomedio": 5.15},
{"nome": "OSELTAMIVIR C\u00c1PS. 45MG", "arima": 266, "rna": 208, "indicacao": "rna", "precomedio": 18.29},
{"nome": "ADESIVO DE NICOTINA 7MG", "arima": 37, "rna": 527, "indicacao": "rna", "precomedio": 4.41},
{"nome": "ADESIVO DE NICOTINA 14MG", "arima": 787, "rna": 332, "indicacao": "rna", "precomedio": 2.26},
{"nome": "PREDNISONA 5 MG", "arima": 361, "rna": 962, "indicacao": "rna", "precomedio": 10.43},
{"nome": "ADESIVO DE NICOTINA\u00a0 21MG ", "arima":
  649, "rna": 972, "indicacao": "rna", "precomedio": 23.57},
{"nome": "CLORIDRATO DE BUPROPIONA 150MG", "arima": 391, "rna": 948, "indicacao": "rna", "precomedio": 7.74},
{"nome": "GOMA DE MASCAR DE NICOTINA 2MG", "arima": 188, "rna": 101, "indicacao": "rna", "precomedio": 4.79},
{"nome": "PASTILHA DE NICOTINA 2MG", "arima": 868, "rna": 132, "indicacao": "rna", "precomedio": 26.18},
{"nome": "PALIVIZUMABE, 100 MG-ML, frasco 0,5ml", "arima": 349, "rna": 526, "indicacao": "rna",
  "precomedio": 14.56},
{"nome": "PALIVIZUMABE, 100 MG-ML, frasco 1ml", "arima": 857, "rna": 644, "indicacao": "rna", "precomedio": 3.8},
{"nome": "LEFLUNOMIDA 20 MG100%LFM", "arima": 350, "rna": 453, "indicacao": "rna", "precomedio": 1.32},
{"nome": "TACROLIMO 5MG FIOCRUZ 100%", "arima": 297, "rna": 821, "indicacao": "rna", "precomedio": 6.07},
{"nome": "PREDNISONA 20 MG", "arima": 882, "rna": 669, "indicacao": "rna", "precomedio": 4.09},
{"nome": "OFLOXAXINO COMP. 400MG", "arima": 304,
  "rna": 653, "indicacao": "rna", "precomedio": 12.92},
{"nome": "TALIDOMIDA 100MG", "arima": 193, "rna": 50, "indicacao": "rna", "precomedio": 20.18},
{"nome": "OSELTAMIVIR C\u00c1PS. 30MG", "arima": 689, "rna": 873, "indicacao": "rna", "precomedio": 22.88},
{"nome": "OSELTAMIVIR C\u00c1PS. 75MG", "arima": 614, "rna": 869, "indicacao": "rna", "precomedio": 3.01},
{"nome": "CLOFAZIMINA 100MG", "arima": 896, "rna": 148, "indicacao": "rna", "precomedio": 25.68},
{"nome": "HIDROXOCOBALAMINA 5G", "arima": 416, "rna": 238, "indicacao": "rna", "precomedio": 14.42},
{"nome": "VITAMINA A 100.000 UI", "arima": 360, "rna": 387, "indicacao": "rna", "precomedio": 14.48},
{"nome": "VITAMINA A 200.000 UI", "arima": 100, "rna": 162, "indicacao": "rna", "precomedio": 13.58},
{"nome": "SACH\u00ca MICRONUTRIENTES", "arima": 292, "rna": 766, "indicacao": "rna", "precomedio": 11.85},
{"nome": "INSULINA REGULAR 100 UI-ML - frascos", "arima": 987, "rna": 821, "indicacao": "rna",
  "precomedio": 12.1},
{"nome": "INSULINA REGULAR 100 UI-ML - tubetes (caneta)", "arima": 930, "rna": 590, "indicacao": "rna", "precomedio": 11.03},
{"nome": "INSULINA NPH -frascos", "arima": 202, "rna": 520, "indicacao": "rna", "precomedio": 3.87},
{"nome": "INSULINA NPH - tubetes (caneta)", "arima": 498, "rna": 104, "indicacao": "rna", "precomedio": 22.31},
{"nome": "INSULINA AN\u00c1LOGA DE A\u00c7\u00c3O R\u00c1PIDA", "arima": 125, "rna": 942, "indicacao": "rna", "precomedio": 12.5},
  {"nome": "INSULINAS AN\u00c1LOGAS DE A\u00c7\u00c3O PROLONGADA", "arima": 966, "rna": 392, "indicacao": "rna", "precomedio": 6.34},
{"nome": "ETANERCEPTE 50 MG - FIOCRUZ 60%", "arima": 597, "rna": 944, "indicacao": "rna", "precomedio": 18.71},
{"nome": "BETAINTERFERONA 1A, 22 MCG - 6.000.000 UI FIOCRUZ 100%", "arima": 11, "rna": 453, "indicacao": "rna", "precomedio": 6.37},
{"nome": "BETAINTERFERONA 1A, 44 MCG - 12.000.000 UI FIOCRUZ 100%", "arima": 628, "rna": 123, "indicacao":
  "rna", "precomedio": 12.6},
{"nome": "CITRATO DE SILDENAFILA , 20 MG -100%LFM", "arima": 855, "rna": 4, "indicacao": "rna", "precomedio": 12.25},
{"nome": "CITRATO DE SILDENAFILA , 25 MG 100%LFM", "arima": 275, "rna": 236, "indicacao": "rna", "precomedio": 3.59},
{"nome": "ADALIMUMABE 40MG", "arima": 368, "rna": 601, "indicacao": "rna", "precomedio": 19.75},
{"nome": "SECUQUINUMABE 150 MG-ML SOL INJ CT 1 SER PREENC VD TRANS X 1 ML + 1 CAN APLIC", "arima": 265, "rna": 600, "indicacao":
  "rna", "precomedio": 11.18},
{"nome": "CITRATO DE SILDENAFILA , 50 MG100%LFM", "arima": 560, "rna": 548, "indicacao": "rna", "precomedio": 3.6},
{"nome": "INFLIXIMABE 100 MG FIOCRUZ 100%", "arima": 330, "rna": 565, "indicacao": "rna", "precomedio": 3.26},
{"nome": "AGULHA, A\u00c7O INOXID\u00c1VEL, P- CANETA APLICADORA", "arima": 664, "rna": 528, "indicacao": "rna", "precomedio": 26.35},
{"nome": "OLANZAPINA 5MG - 50% NUPLAM", "arima": 722, "rna": 360, "indicacao": "rna",
  "precomedio": 28.69},
{"nome": "OLANZAPINA 10MG - 50% NUPLAM", "arima": 996, "rna": 54, "indicacao": "rna", "precomedio": 8.94},
{"nome": "MICOFENOLATO DE S\u00d3DIO 180 MG -100%LQFEX", "arima": 499, "rna": 638, "indicacao": "rna", "precomedio": 27.66},
{"nome": "MICOFENOLATO DE S\u00d3DIO 360 MG - 100%LQFEX", "arima": 984, "rna": 365, "indicacao": "rna", "precomedio": 25.96},
{"nome": "RILUZOL 50 MG- 100%LFM", "arima": 161, "rna": 115, "indicacao": "rna", "precomedio": 8.22},
  {"nome": "ALFATALIGLICERASE 200 U FIOCRUZ 100%", "arima": 594, "rna": 674, "indicacao": "rna", "precomedio": 29.9},
{"nome": "ZIPRAZIDONA 40 MG - 100%LFM", "arima": 183, "rna": 941, "indicacao": "rna", "precomedio": 27.24},
{"nome": "ZIPRAZIDONA 80 MG - 100%LFM", "arima": 212, "rna": 113, "indicacao": "rna", "precomedio": 5.12},
{"nome": "TACROLIMO 1MG FIOCRUZ 100%", "arima": 23, "rna": 543, "indicacao": "rna", "precomedio": 15.3},
{"nome": "PRAZIQUANTEL COMP. 600MG", "arima": 224, "rna":
  660, "indicacao": "rna", "precomedio": 5.97},
{"nome": "SULFADIAZINA 500MG COMP", "arima": 167, "rna": 267, "indicacao": "rna", "precomedio": 29.71},
{"nome": "LINEZOLIDA, 2 MG-ML, SOL. INJET\u00c1VEL", "arima": 535, "rna": 268, "indicacao": "rna", "precomedio": 29.32},
{"nome": "MOXIFLOXACINO 400 MG", "arima": 34, "rna": 877, "indicacao": "rna", "precomedio": 6.85},
{"nome": "\u00c1CIDO PARAMINOSSALICILICO 4 G GRANU ORAL", "arima": 2, "rna": 579, "indicacao": "rna",
  "precomedio": 16.52},
{"nome": "PRAMIPEXOL 0,125 MG FIOCRUZ 100%", "arima": 48, "rna": 727, "indicacao": "rna", "precomedio": 26.81},
{"nome": "PRAMIPEXOL 0,25 MG FIOCRUZ 100%", "arima": 62, "rna": 410, "indicacao": "rna", "precomedio": 16.08},
{"nome": "PPD - DERIVADO PROT\u00c9ICO PURIFICADO 0,1 ML", "arima": 741, "rna": 157, "indicacao": "rna", "precomedio": 6.89},
{"nome": "ETIONAMIDA COMP 250MG", "arima": 298, "rna": 836, "indicacao": "rna", "precomedio": 15.93},
{"nome": "ISONIAZIDA COMP 100MG", "arima": 492, "rna": 376, "indicacao": "rna", "precomedio": 14.68},
{"nome": "PRAMIPEXOL 1 MG FIOCRUZ 100%", "arima": 873, "rna": 278, "indicacao": "rna", "precomedio": 20.65},
{"nome": "ANTICONCEPCIONAL HORMONAL DE EMERG\u00caNCIA - LEVONORGESTREL 0,75MG - CARTELA COM 2 COMPRIMIDOS ", "arima": 215, "rna": 221, "indicacao": "rna", "precomedio": 26.48},
{"nome": "ANTICONCEPCIONAL HORMONAL INJET\u00c1VEL - ACETATO MEDROXIPROGESTERONA 150MG-ML (TRIMESTRAL)", "arima": 618, "rna":
  203, "indicacao": "rna", "precomedio": 18.38},
{"nome": "ANTICONCEPCIONAL HORMONAL INJET\u00c1VEL - ENANTATO DE NORETISTERONA 50MG + VALERATO DE ESTRADIOL 5MG (MENSAL)", "arima": 62, "rna": 330, "indicacao": "rna", "precomedio": 9.16},
{"nome": "ANTICONCEPCIONAL HORMONAL ORAL - ETINILESTRADIOL 0,03MG + LEVONORGESTREL 0,15MG - P\u00cdLULA COMBINADA", "arima": 562, "rna": 857, "indicacao": "rna", "precomedio": 26.91},
{"nome": "ANTICONCEPCIONAL HORMONAL ORAL - NORETISTERONA 0,35MG P\u00cdLULA ", "arima": 928, "rna": 67, "indicacao": "rna", "precomedio": 7.76},
{"nome": "DISPOSITIVOS INTRA-UTERINOS - DIU", "arima": 333, "rna": 755, "indicacao": "rna", "precomedio": 2.94},
{"nome": "MISOPROSTOL 200 MCG", "arima": 256, "rna": 471, "indicacao": "rna", "precomedio": 19.82},
{"nome": "MISOPROSTOL 25 MCG", "arima": 648, "rna": 125, "indicacao": "rna", "precomedio": 25.53},
{"nome": "ENOXAPARINA 100 MG-ML, SOLU\u00c7\u00c3O INJET\u00c1VEL, SERINGA PREENCHIDA", "arima":
  429, "rna": 552, "indicacao": "rna", "precomedio": 8.55},
{"nome": "CALAMIDADE P\u00daBLICA (KIT) - MEDICAMENTOS DIVERSOS", "arima": 413, "rna": 637, "indicacao": "rna", "precomedio": 10.08},
{"nome": "GLATIRAMER 40 MG", "arima": 246, "rna": 875, "indicacao": "rna", "precomedio": 12.08},
{"nome": "\u00c1CIDO ZOLEDR\u00d4NICO 5 MG-100ML ", "arima": 538, "rna": 501, "indicacao": "rna", "precomedio": 6.16},
{"nome": "GALSULFASE 1MG-ML", "arima": 516, "rna": 593, "indicacao": "rna",
  "precomedio": 8.17},
{"nome": "ALFAELOSULFASE 1MG-ML", "arima": 670, "rna": 726, "indicacao": "rna", "precomedio": 22.92},
{"nome": "ECULIZUMABE 10 MG-ML", "arima": 77, "rna": 923, "indicacao": "rna", "precomedio": 13.89},
{"nome": "USTEQUINUMABE 45 MG-0,5ML", "arima": 909, "rna": 147, "indicacao": "rna", "precomedio": 28.49},
{"nome": "NUSINERSENA 12MG-5ML", "arima": 721, "rna": 392, "indicacao": "rna", "precomedio": 14.98},
{"nome": "ABATACEPTE 125ML SUBCUT\u00c2NEO", "arima":
  822, "rna": 133, "indicacao": "rna", "precomedio": 23.06},
{"nome": "ABATACEPTE 250MG", "arima": 45, "rna": 674, "indicacao": "rna", "precomedio": 28.79},
{"nome": "ADALIMUMABE 40MG seringa", "arima": 53, "rna": 935, "indicacao": "rna", "precomedio": 21.54},
{"nome": "ADALIMUMABE 40MG frasco-ampola", "arima": 449, "rna": 837, "indicacao": "rna", "precomedio": 14.01},
{"nome": "ALFADORNASE 2,5 MG", "arima": 11, "rna": 783, "indicacao": "rna", "precomedio": 11.01},
{"nome": "ALFAEPOETINA 1.000 UI ", "arima": 723, "rna": 752, "indicacao": "rna", "precomedio": 18.31},
{"nome": "ALFAEPOETINA 2.000 UI", "arima": 117, "rna": 899, "indicacao": "rna", "precomedio": 21.94},
{"nome": "ALFAEPOETINA 3.000 UI ", "arima": 287, "rna": 860, "indicacao": "rna", "precomedio": 17.17},
{"nome": "ALFAEPOETINA 4.000 UI", "arima": 527, "rna": 590, "indicacao": "rna", "precomedio": 10.22},
{"nome": "ALFAEPOETINA 10.000 UI ", "arima": 612, "rna": 972, "indicacao": "rna", "precomedio":
  25.91},
{"nome": "BETAINTERFERONA 1A, 30 MCG - 6.000.000 UI", "arima": 259, "rna": 91, "indicacao": "rna", "precomedio": 22.73},
{"nome": "BETAINTERFERONA 1B, 300 MCG - 9.600.00 UI", "arima": 896, "rna": 356, "indicacao": "rna", "precomedio": 12.7},
{"nome": "BIMATOPROSTA 0,3 MG-ML", "arima": 276, "rna": 286, "indicacao": "rna", "precomedio": 8.36},
{"nome": "LATANOPROSTA 0,05 MG-ML", "arima": 250, "rna": 204, "indicacao": "rna", "precomedio": 4.59},
{"nome": "TRAVOPROSTA 0,04 MG-ML",
  "arima": 161, "rna": 292, "indicacao": "rna", "precomedio": 16.32},
{"nome": "CARBEGOLINA 0,5 MG", "arima": 427, "rna": 604, "indicacao": "rna", "precomedio": 21.7},
{"nome": "CERTOLIZUMABE 200 MG-ML", "arima": 262, "rna": 507, "indicacao": "rna", "precomedio": 17.78},
{"nome": "ETANERCEPTE 50MG", "arima": 400, "rna": 438, "indicacao": "rna", "precomedio": 4.45},
{"nome": "IMUNOGLOBULINA HUMANA 5G - HEMOBRAS", "arima": 32, "rna": 776, "indicacao": "rna", "precomedio": 4.94},
{"nome":
  "CINALCACETE 30 MG", "arima": 130, "rna": 750, "indicacao": "rna", "precomedio": 15.58},
{"nome": "CINALCACETE 60 MG", "arima": 754, "rna": 424, "indicacao": "rna", "precomedio": 1.28},
{"nome": "CLOZAPINA 25MG", "arima": 33, "rna": 656, "indicacao": "rna", "precomedio": 5.95},
{"nome": "CLOZAPINA 100MG", "arima": 503, "rna": 93, "indicacao": "rna", "precomedio": 26.38},
{"nome": "DACTINOMICINA 0,5 MG", "arima": 226, "rna": 665, "indicacao": "rna", "precomedio": 14.44},
  {"nome": "DASATINIBE 20 MG", "arima": 663, "rna": 91, "indicacao": "rna", "precomedio": 10.18},
{"nome": "DASATINIBE 100 MG", "arima": 140, "rna": 122, "indicacao": "rna", "precomedio": 16.23},
{"nome": "DESMOPRESSINA ACETATO DE 0,1 MG-ML", "arima": 743, "rna": 412, "indicacao": "rna", "precomedio": 12.38},
{"nome": "DESMOPRESSINA 0,1MG (POR COMPRIMIDO) - Grupoo 1A", "arima": 507, "rna": 146, "indicacao": "rna", "precomedio": 22.27},
{"nome": "DESMOPRESSINA 0,2MG (POR COMPRIMIDO) - Grupo 1A", "arima": 571, "rna": 564, "indicacao": "rna", "precomedio": 16.19},
{"nome": "DEFERASIROX, 125 MG, COMPRIMIDO DISPERS\u00cdVEL", "arima": 801, "rna": 361, "indicacao": "rna", "precomedio": 21.5},
{"nome": "DEFERASIROX, 250 MG, COMPRIMIDO DISPERS\u00cdVEL", "arima": 966, "rna": 614, "indicacao": "rna", "precomedio": 9.46},
{"nome": "DEFERASIROX, 500 MG, COMPRIMIDO DISPERS\u00cdVEL", "arima": 986, "rna": 669, "indicacao": "rna", "precomedio": 4.5},
{"nome":
      "DONEPEZILA 5 MG", "arima": 288, "rna": 363, "indicacao": "rna", "precomedio": 11.62},
{"nome": "DONEPEZILA 10 MG", "arima": 994, "rna": 253, "indicacao": "rna", "precomedio": 7.89},
{"nome": "ENOXAPARINA 100 MG-ML, Solu\u00e7\u00e3o injet\u00e1vel, seringa preenchida", "arima": 243, "rna": 172, "indicacao": "rna", "precomedio": 26.19},
{"nome": "ENTACAPONA 200 MG", "arima": 211, "rna": 923, "indicacao": "rna", "precomedio": 1.16},
{"nome": "ETANERCEPTE 25MG", "arima": 145, "rna":
      503, "indicacao": "rna", "precomedio": 3.78},
{"nome": "EVEROLIMO 0,5MG", "arima": 20, "rna": 487, "indicacao": "rna", "precomedio": 4.86},
{"nome": "EVEROLIMO 0,75MG", "arima": 267, "rna": 420, "indicacao": "rna", "precomedio": 10.78},
{"nome": "EVEROLIMO 1MG", "arima": 330, "rna": 836, "indicacao": "rna", "precomedio": 13.39},
{"nome": "FILGRASTIM 300MG", "arima": 848, "rna": 315, "indicacao": "rna", "precomedio": 5.38},
{"nome": "FINGOLIMODE 0,5 MG", "arima": 214, "rna": 208,
      "indicacao": "rna", "precomedio": 8.08},
{"nome": "FUMERATO DE DIMETILA 120 MG", "arima": 621, "rna": 580, "indicacao": "rna", "precomedio": 23.57},
{"nome": "FUMERATO DE DIMETILA 240 MG", "arima": 144, "rna": 122, "indicacao": "rna", "precomedio": 28.19},
{"nome": "GALANTAMINA 8 MG", "arima": 439, "rna": 425, "indicacao": "rna", "precomedio": 26.66},
{"nome": "GALANTAMINA 16 MG", "arima": 257, "rna": 232, "indicacao": "rna", "precomedio": 8.54},
{"nome": "GALANTAMINA 24 MG",
      "arima": 768, "rna": 729, "indicacao": "rna", "precomedio": 23.44},
{"nome": "GLATIR\u00c2MER 20MG", "arima": 301, "rna": 413, "indicacao": "rna", "precomedio": 11.83},
{"nome": "GOLIMUMABE 50MG", "arima": 70, "rna": 25, "indicacao": "rna", "precomedio": 6.7},
{"nome": "HIDROCORTISONA 5 MG", "arima": 860, "rna": 75, "indicacao": "rna", "precomedio": 10.73},
{"nome": "RIVASTIGMINA 1,5MG", "arima": 808, "rna": 121, "indicacao": "rna", "precomedio": 28.5},
{"nome": "RIVASTIGMINA 3MG",
      "arima": 581, "rna": 699, "indicacao": "rna", "precomedio": 14.75},
{"nome": "RIVASTIGMINA 4,5MG", "arima": 992, "rna": 540, "indicacao": "rna", "precomedio": 12.98},
{"nome": "RIVASTIGMINA 6MG", "arima": 444, "rna": 231, "indicacao": "rna", "precomedio": 19.48},
{"nome": "RIVASTIGMINA ADESIVO TRANSDERMICO 5CM - 9 MG", "arima": 524, "rna": 518, "indicacao": "rna", "precomedio": 13.62},
{"nome": "RIVASTIGMINA ADESIVO TRANSDERMICO 10CM - 18 MG", "arima": 47, "rna": 280, "indicacao":
  "rna", "precomedio": 17.98},
{"nome": "SECUQUINUMABE, 150 MG-ML, SOLU\u00c7\u00c3O INJET\u00c1VEL, COM CANETA APLICADORA", "arima": 862, "rna": 509, "indicacao": "rna", "precomedio": 24.97},
{"nome": "SEVEL\u00c2MER 800MG ", "arima": 933, "rna": 72, "indicacao": "rna", "precomedio": 20.13},
{"nome": "SIROLIMO 1MG", "arima": 908, "rna": 529, "indicacao": "rna", "precomedio": 7.99},
{"nome": "SIROLIMO 2MG", "arima": 945, "rna": 931, "indicacao": "rna", "precomedio": 12.97},
  {"nome": "SOMATROPINA HUMANA REC. 4UI INJET\u00c1VEL", "arima": 833, "rna": 868, "indicacao": "rna", "precomedio": 6.62},
{"nome": "SOMATROPINA HUMANA REC. 12 UI A 30 UI, INJET\u00c1VEL", "arima": 81, "rna": 421, "indicacao": "rna", "precomedio": 18.15},
{"nome": "TACROLIMO 1MG", "arima": 236, "rna": 611, "indicacao": "rna", "precomedio": 29.38},
{"nome": "TACROLIMO 5MG", "arima": 244, "rna": 511, "indicacao": "rna", "precomedio": 5.39},
{"nome": "HIDROCORTISONA 10 MG", "arima": 144,
  "rna": 650, "indicacao": "rna", "precomedio": 16.41},
{"nome": "IDURSULFASE 2,0 MG-ML SOL. INJ.", "arima": 225, "rna": 879, "indicacao": "rna", "precomedio": 16.65},
{"nome": "IMIGLUCERASE 400 UI", "arima": 157, "rna": 987, "indicacao": "rna", "precomedio": 15.57},
{"nome": "IMUNOGLOBULINA HUMANA 5G", "arima": 930, "rna": 776, "indicacao": "rna", "precomedio": 10.83},
{"nome": "IMUNOGLOBULINA ANTI-HEPATITE B 100 UI", "arima": 995, "rna": 219, "indicacao": "rna", "precomedio": 20.63},
  {"nome": "IMUNOGLOBULINA ANTI-HEPATITE B 600 UI", "arima": 5, "rna": 429, "indicacao": "rna", "precomedio": 24.25},
{"nome": "INSULINA AN\u00c1LOGA", "arima": 586, "rna": 422, "indicacao": "rna", "precomedio": 16.79},
{"nome": "AGULHAS", "arima": 546, "rna": 743, "indicacao": "rna", "precomedio": 14.14},
{"nome": "LANREOTIDA 60 MG (1B \u00e0 1A)", "arima": 393, "rna": 413, "indicacao": "rna", "precomedio": 7.64},
{"nome": "ANFOTERICINA B (DESOXICOLATO) 50MG\u00a0INJET\u00c1VEL", "arima":
  986, "rna": 650, "indicacao": "rna", "precomedio": 28.92},
{"nome": "PENTAMIDINA 50 MG", "arima": 134, "rna": 514, "indicacao": "rna", "precomedio": 2.69},
{"nome": "MILTEFOSINA 50MG", "arima": 470, "rna": 975, "indicacao": "rna", "precomedio": 10.76},
{"nome": "BENZILPENICILINA 1.200.000 UI", "arima": 967, "rna": 563, "indicacao": "rna", "precomedio": 25.38},
{"nome": "BENZILPENICILINA POT\u00c1SSICA 5.000.000 UI", "arima": 106, "rna": 437, "indicacao": "rna", "precomedio": 9.59},
  {"nome": "ESPIRAMICINA 500MG COMP", "arima": 407, "rna": 217, "indicacao": "rna", "precomedio": 1.46},
{"nome": "LANREOTIDA 90 MG (1B \u00e0 1A)", "arima": 197, "rna": 318, "indicacao": "rna", "precomedio": 4.89},
{"nome": "LANREOTIDA 120 MG (1B \u00e0 1A)", "arima": 606, "rna": 882, "indicacao": "rna", "precomedio": 3.63},
{"nome": "RITUXIMABE 500mg (10mg-mL frasco c- 50 ml)", "arima": 257, "rna": 539, "indicacao": "rna", "precomedio": 10.32},
{"nome": "LARONIDASE 2,9mg-5mL",
  "arima": 213, "rna": 506, "indicacao": "rna", "precomedio": 7.67},
{"nome": "LEVETIRACETAM 100 MG-ML", "arima": 788, "rna": 142, "indicacao": "rna", "precomedio": 25.53},
{"nome": "LEVETIRACETAM 250 MG", "arima": 68, "rna": 168, "indicacao": "rna", "precomedio": 18.78},
{"nome": "LEVETIRACETAM 750 MG", "arima": 215, "rna": 918, "indicacao": "rna", "precomedio": 6.11},
{"nome": "MEMANTINA 100 MG", "arima": 106, "rna": 775, "indicacao": "rna", "precomedio": 17.52},
{"nome": "MESILATO DE IMATINIBE 100 MG ", "arima": 164, "rna": 466, "indicacao": "rna", "precomedio": 15.74},
{"nome": "MESILATO DE IMATINIBE 400 MG ", "arima": 512, "rna": 878, "indicacao": "rna", "precomedio": 15.77},
{"nome": "MICOFENOLATO DE MOFETILA 500MG", "arima": 591, "rna": 707, "indicacao": "rna", "precomedio": 24.54},
{"nome": "MESILATO DE RASAGILINA", "arima": 964, "rna": 280, "indicacao": "rna", "precomedio": 11.11},
{"nome": "METOTREXATO 2,5 mg (por comprimido)", "arima": 714, "rna": 238, "indicacao": "rna", "precomedio": 27.3},
{"nome": "METOTREXATO 25 mg-mL injet\u00e1vel (por ampola de 2 mL)", "arima": 70, "rna": 400, "indicacao": "rna", "precomedio": 25.49},
{"nome": "MIGLUSTATE 100 MG", "arima": 939, "rna": 822, "indicacao": "rna", "precomedio": 27.5},
{"nome": "NATALIZUMABE 20 MG", "arima": 503, "rna": 985, "indicacao": "rna", "precomedio": 18.56},
{"nome": "NILOTINIBE 200 MG", "arima": 634, "rna": 73, "indicacao": "rna", "precomedio": 28.99},
{"nome": "OCTREOTIDA 20 MG", "arima": 864, "rna": 397, "indicacao": "rna", "precomedio": 16.83},
{"nome": "QUETIAPINA 300 MG", "arima": 569, "rna": 431, "indicacao": "rna", "precomedio": 12.32},
{"nome": "RITUXIMABE 100mg (10mg-mL frasco c- 10 ml)", "arima": 944, "rna": 967, "indicacao": "rna", "precomedio": 10.87},
{"nome": "TAFAMIDIS 20 MG", "arima": 34, "rna": 60, "indicacao": "rna", "precomedio": 15.94},
{"nome": "TERIFLUNOMIDA 14 MG", "arima": 695, "rna": 494, "indicacao": "rna", "precomedio": 9.56},
{"nome": "TOBRAMICINA 300mg-5mL inalat\u00f3rio", "arima": 932, "rna": 416, "indicacao": "rna", "precomedio": 11.88},
{"nome": "TOCILIZUMABE 20MG-mL", "arima": 24, "rna": 104, "indicacao": "rna", "precomedio": 1.66},
{"nome": "TOFACITINIBE 5mg", "arima": 221, "rna": 322, "indicacao": "rna", "precomedio": 24.56},
{"nome": "TOXINA BOTULINA A 100U", "arima": 700, "rna": 170, "indicacao": "rna", "precomedio": 22.59},
{"nome": "TOXINA BOTUL\u00cdNICA TIPO A 500 U", "arima": 632, "rna": 804, "indicacao": "rna", "precomedio": 4.12},
{"nome": "TRASTUZUMABE 150MG ", "arima": 65, "rna": 783, "indicacao": "rna", "precomedio": 6.33},
{"nome": "TRIENTINA 250 MG - N\u00e3o Pactuado", "arima": 864, "rna": 316, "indicacao": "rna", "precomedio": 21.33},
{"nome": "HIPOCLORITO DE S\u00d3DIO 2,5% FRASCO", "arima": 821, "rna": 339, "indicacao": "rna", "precomedio": 15.03}];

  public states = [ [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
    ], [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
    ], [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
    ], [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, Manual: 13200 }, selection: 'RNA'},
    ],
  ];

  public totalStates = [
      {id: 1, name: 'Acre', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 120000, RNA: 134000, Manual: 132000 }, selection: 'RNA'},
    ];

  public medicine: any;
  public selectedStates = [];
  public valuesChart: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.medicine = this.medicines.filter((d) => `${d.nome}` === params.get('id'))[0];
      let chartValues = document.getElementById('chart-values');
      
      parseOptions(Chart, chartOptions());

      this.valuesChart = new Chart(chartValues, {
        type: 'line',
        options: chartExample1.options,
        data: this.buildData()
      });
    });
  }

  computeValue(state) {
    return state.predictions[state.selection] * this.medicine.precomedio;
  }

  buildData() {
    let filteredStates;
    if(!this.selectedStates.length) {
      filteredStates = this.states;
    } else {
      filteredStates = this.states.map((p) => p.filter((s) => this.selectedStates.includes(s.name)));
    }
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const labels = [];
    const datasets = [
      {
        label: 'ARIMA',
        borderWidth: 2,
        data: [],
        backgroundColor: [],
        borderColor: [],
      }, {
        label: 'RNA',
        borderWidth: 2,
        data: [],
        backgroundColor: [],
        borderColor: [],
      }, {
        label: 'Manual',
        borderWidth: 2,
        data: [],
        backgroundColor: [],
        borderColor: [],
      }
    ];
    const curr = new Date().getMonth();
    for (let i = 0; i < 4; i++) {
      labels.push(months[(curr + i) % months.length]);
      for(let j = 0; j < 3; j++) {
        datasets[j].data.push(filteredStates[i].reduce((a,b) => a + b.predictions[datasets[j].label], 0));
        datasets[j].backgroundColor.push(chartExample1.data.datasets[j].backgroundColor[0])
        datasets[j].borderColor.push(chartExample1.data.datasets[j].borderColor[0])
      }
    }

    const data = {
      labels,
      datasets,
    };
    console.log(chartExample1.options);
    return data;
  }

  selectAll($event) {
    const check = $event.target.checked;
    //@ts-ignore
    // eslint-disable-next-line
    $('td input:checkbox').prop('checked',check);
    this.selectStates();
  }

  selectStates() {
    //@ts-ignore
    // eslint-disable-next-line
    this.selectedStates =  $('td input:checkbox:checked').map((i,a) => a.name).toArray();
    this.valuesChart.data = this.buildData();
    this.valuesChart.update();
  }
}
