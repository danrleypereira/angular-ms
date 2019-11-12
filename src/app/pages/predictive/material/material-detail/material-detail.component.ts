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

  public medicines = [{"nome": "BIOTINA 2,5 mg", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OCTREOTIDA 30 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OLANZAPINA 5MG - LAFEPE 50%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OLANZAPINA 10MG - LAFEPE 50%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PERTUZUMABE, 30 MG-ML, SOLU\u00c7\u00c3O INJ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PARICALCITOL 5MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "QUETIAPINA 25MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "QUETIAPINA 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "QUETIAPINA 200MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "AZITROMICINA 500 MG ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "AZITROMICINA 600 MG ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MEGLUMINA ANTIMONIATO 300 MG-ML SOL. INJ.", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DOXICICLINA 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ANFOTERICINA B, 5 MG-ML SUSP. INJET\u00c1VEL (COMPLEXO LIP\u00cdDICO)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ITRACONAZOL C\u00c1PSULA 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ARTEMETER 200MG\u00a0 + LUMEFANTRINE 120MG - BL. C-24", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ARTESUNATO DE S\u00d3DIO 60 MG, P\u00d3 LI\u00d3FILO INJET\u00c1VEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PRIMAQUINA DIFOSFATO 15 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PIRIMETAMINA 25MG COMP", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CLARITROMICINA COMP. 500 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LEVOFLOXACINO 500 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LINEZOLIDA 600MG ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TERIZIDONA 250MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ISONIAZIDA COMP 300MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PIRIDOXINA 50 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DOXICICLINA 100MG COMP. DISPERS\u00cdVEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIFAMPICINA 150MG + ISONIAZIDA 75MG + PIRAZINAMIDA 400MG + ETAMBUTOL 275MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIFAMPICINA 300MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ANFOTERICINA B 50mg (Lipossomal) ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CLOROQUINA 150MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DIETILCARBAMAZINA 50 mg comprimido", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "AMICACINA 250mg", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ETAMBUTOL 400MG COMPRIMIDO", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIFAMPICINA 20MG-ML SUSP. ORAL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MINOCICLINA CLORIDRATO 100 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PENTOXIFILINA, 400 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OSELTAMIVIR C\u00c1PS. 45MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ADESIVO DE NICOTINA 7MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ADESIVO DE NICOTINA 14MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PREDNISONA 5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ADESIVO DE NICOTINA\u00a0 21MG ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CLORIDRATO DE BUPROPIONA 150MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GOMA DE MASCAR DE NICOTINA 2MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PASTILHA DE NICOTINA 2MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PALIVIZUMABE, 100 MG-ML, frasco 0,5ml", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PALIVIZUMABE, 100 MG-ML, frasco 1ml", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LEFLUNOMIDA 20 MG100%LFM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TACROLIMO 5MG FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PREDNISONA 20 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OFLOXAXINO COMP. 400MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TALIDOMIDA 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OSELTAMIVIR C\u00c1PS. 30MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OSELTAMIVIR C\u00c1PS. 75MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CLOFAZIMINA 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "HIDROXOCOBALAMINA 5G", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "VITAMINA A 100.000 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "VITAMINA A 200.000 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SACH\u00ca MICRONUTRIENTES", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINA REGULAR 100 UI-ML - frascos", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINA REGULAR 100 UI-ML - tubetes (caneta)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINA NPH -frascos", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINA NPH - tubetes (caneta)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINA AN\u00c1LOGA DE A\u00c7\u00c3O R\u00c1PIDA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINAS AN\u00c1LOGAS DE A\u00c7\u00c3O PROLONGADA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ETANERCEPTE 50 MG - FIOCRUZ 60%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BETAINTERFERONA 1A, 22 MCG - 6.000.000 UI FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BETAINTERFERONA 1A, 44 MCG - 12.000.000 UI FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CITRATO DE SILDENAFILA , 20 MG -100%LFM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CITRATO DE SILDENAFILA , 25 MG 100%LFM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ADALIMUMABE 40MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SECUQUINUMABE 150 MG-ML SOL INJ CT 1 SER PREENC VD TRANS X 1 ML + 1 CAN APLIC", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CITRATO DE SILDENAFILA , 50 MG100%LFM", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "INFLIXIMABE 100 MG FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "AGULHA, A\u00c7O INOXID\u00c1VEL, P CANETA APLICADORA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OLANZAPINA 5MG - 50% NUPLAM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OLANZAPINA 10MG - 50% NUPLAM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MICOFENOLATO DE S\u00d3DIO 180 MG -100%LQFEX", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MICOFENOLATO DE S\u00d3DIO 360 MG - 100%LQFEX", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RILUZOL 50 MG- 100%LFM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFATALIGLICERASE 200 U FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ZIPRAZIDONA 40 MG - 100%LFM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome":
      "ZIPRAZIDONA 80 MG - 100%LFM", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TACROLIMO 1MG FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PRAZIQUANTEL COMP. 600MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SULFADIAZINA 500MG COMP", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LINEZOLIDA, 2 MG-ML, SOL. INJET\u00c1VEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome":
      "MOXIFLOXACINO 400 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "\u00c1CIDO PARAMINOSSALICILICO 4 G GRANU ORAL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PRAMIPEXOL 0,125 MG FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PRAMIPEXOL 0,25 MG FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PPD - DERIVADO PROT\u00c9ICO PURIFICADO 0,1 ML", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "ETIONAMIDA COMP 250MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ISONIAZIDA COMP 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PRAMIPEXOL 1 MG FIOCRUZ 100%", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ANTICONCEPCIONAL HORMONAL DE EMERG\u00caNCIA - LEVONORGESTREL 0,75MG - CARTELA COM 2 COMPRIMIDOS ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ANTICONCEPCIONAL HORMONAL INJET\u00c1VEL - ACETATO MEDROXIPROGESTERONA 150MG-ML (TRIMESTRAL)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ANTICONCEPCIONAL HORMONAL INJET\u00c1VEL - ENANTATO DE NORETISTERONA 50MG + VALERATO DE ESTRADIOL 5MG (MENSAL)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ANTICONCEPCIONAL HORMONAL ORAL - ETINILESTRADIOL 0,03MG + LEVONORGESTREL 0,15MG - P\u00cdLULA COMBINADA", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "ANTICONCEPCIONAL HORMONAL ORAL - NORETISTERONA 0,35MG P\u00cdLULA ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DISPOSITIVOS INTRA-UTERINOS - DIU", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MISOPROSTOL 200 MCG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MISOPROSTOL 25 MCG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ENOXAPARINA 100 MG-ML, SOLU\u00c7\u00c3O INJET\u00c1VEL, SERINGA PREENCHIDA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CALAMIDADE P\u00daBLICA (KIT) - MEDICAMENTOS DIVERSOS", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GLATIRAMER 40 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "\u00c1CIDO ZOLEDR\u00d4NICO 5 MG-100ML ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GALSULFASE 1MG-ML", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "ALFAELOSULFASE 1MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ECULIZUMABE 10 MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "USTEQUINUMABE 45 MG-0,5ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "NUSINERSENA 12MG-5ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ABATACEPTE 125ML SUBCUT\u00c2NEO", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
      {"nome": "ABATACEPTE 250MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ADALIMUMABE 40MG seringa", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ADALIMUMABE 40MG frasco-ampola", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFADORNASE 2,5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFAEPOETINA 1.000 UI ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFAEPOETINA 2.000 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFAEPOETINA 3.000 UI ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFAEPOETINA 4.000 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ALFAEPOETINA 10.000 UI ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BETAINTERFERONA 1A, 30 MCG - 6.000.000 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BETAINTERFERONA 1B, 300 MCG - 9.600.00 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BIMATOPROSTA 0,3 MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LATANOPROSTA 0,05 MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TRAVOPROSTA 0,04 MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CARBEGOLINA 0,5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CERTOLIZUMABE 200 MG-ML", "arima": 0, "rna":
          0, "indicacao": "rna", "precomedio": 0},
{"nome": "ETANERCEPTE 50MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "IMUNOGLOBULINA HUMANA 5G - HEMOBRAS", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CINALCACETE 30 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CINALCACETE 60 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "CLOZAPINA 25MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio":
      0},
{"nome": "CLOZAPINA 100MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DACTINOMICINA 0,5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DASATINIBE 20 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DASATINIBE 100 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DESMOPRESSINA ACETATO DE 0,1 MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DESMOPRESSINA 0,1MG (POR COMPRIMIDO) - Grupoo 1A", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DESMOPRESSINA 0,2MG (POR COMPRIMIDO) - Grupo 1A", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DEFERASIROX, 125 MG, COMPRIMIDO DISPERS\u00cdVEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DEFERASIROX, 250 MG, COMPRIMIDO DISPERS\u00cdVEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DEFERASIROX, 500 MG, COMPRIMIDO DISPERS\u00cdVEL",
      "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DONEPEZILA 5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "DONEPEZILA 10 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ENOXAPARINA 100 MG-ML, Solu\u00e7\u00e3o injet\u00e1vel, seringa preenchida", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ENTACAPONA 200 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "ETANERCEPTE 25MG",
      "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "EVEROLIMO 0,5MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "EVEROLIMO 0,75MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "EVEROLIMO 1MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "FILGRASTIM 300MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "FINGOLIMODE 0,5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome":
      "FUMERATO DE DIMETILA 120 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "FUMERATO DE DIMETILA 240 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GALANTAMINA 8 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GALANTAMINA 16 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GALANTAMINA 24 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "GLATIR\u00c2MER 20MG", "arima": 0, "rna":
      0, "indicacao": "rna", "precomedio": 0},
{"nome": "GOLIMUMABE 50MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "HIDROCORTISONA 5 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIVASTIGMINA 1,5MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIVASTIGMINA 3MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIVASTIGMINA 4,5MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome":
      "RIVASTIGMINA 6MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIVASTIGMINA ADESIVO TRANSDERMICO 5CM - 9 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RIVASTIGMINA ADESIVO TRANSDERMICO 10CM - 18 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SECUQUINUMABE, 150 MG-ML, SOLU\u00c7\u00c3O INJET\u00c1VEL, COM CANETA APLICADORA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SEVEL\u00c2MER 800MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SIROLIMO 1MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SIROLIMO 2MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SOMATROPINA HUMANA REC. 4UI INJET\u00c1VEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "SOMATROPINA HUMANA REC. 12 UI A 30 UI, INJET\u00c1VEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TACROLIMO 1MG",
      "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TACROLIMO 5MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "HIDROCORTISONA 10 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "IDURSULFASE 2,0 MG-ML SOL. INJ.", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "IMIGLUCERASE 400 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "IMUNOGLOBULINA HUMANA 5G", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "IMUNOGLOBULINA ANTI-HEPATITE B 100 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "IMUNOGLOBULINA ANTI-HEPATITE B 600 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "INSULINA AN\u00c1LOGA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "AGULHAS", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LANREOTIDA 60 MG (1B \u00e0 1A)", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "ANFOTERICINA B (DESOXICOLATO) 50MG\u00a0INJET\u00c1VEL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "PENTAMIDINA 50 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MILTEFOSINA 50MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BENZILPENICILINA 1.200.000 UI", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "BENZILPENICILINA POT\u00c1SSICA 5.000.000 UI", "arima": 0, "rna": 0,
      "indicacao": "rna", "precomedio": 0},
{"nome": "ESPIRAMICINA 500MG COMP", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LANREOTIDA 90 MG (1B \u00e0 1A)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LANREOTIDA 120 MG (1B \u00e0 1A)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RITUXIMABE 500mg (10mg-mL frasco c- 50 ml)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LARONIDASE 2,9mg-5mL", "arima": 0, "rna":
      0, "indicacao": "rna", "precomedio": 0},
{"nome": "LEVETIRACETAM 100 MG-ML", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LEVETIRACETAM 250 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "LEVETIRACETAM 750 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MEMANTINA 100 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MESILATO DE IMATINIBE 100 MG ", "arima": 0, "rna": 0, "indicacao": "rna",
      "precomedio": 0},
{"nome": "MESILATO DE IMATINIBE 400 MG ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MICOFENOLATO DE MOFETILA 500MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MESILATO DE RASAGILINA", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "METOTREXATO 2,5 mg (por comprimido)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "METOTREXATO 25 mg-mL injet\u00e1vel (por ampola de 2 mL)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "MIGLUSTATE 100 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "NATALIZUMABE 20 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "NILOTINIBE 200 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "OCTREOTIDA 20 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "QUETIAPINA 300 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "RITUXIMABE 100mg (10mg-mL frasco c- 10 ml)", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TAFAMIDIS 20 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TERIFLUNOMIDA 14 MG", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TOBRAMICINA 300mg-5mL inalat\u00f3rio", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TOCILIZUMABE 20MG-mL", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TOFACITINIBE 5mg", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TOXINA BOTULINA A 100U", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TOXINA BOTUL\u00cdNICA TIPO A 500 U", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TRASTUZUMABE 150MG ", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "TRIENTINA 250 MG - N\u00e3o Pactuado", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0},
{"nome": "HIPOCLORITO DE S\u00d3DIO 2,5% FRASCO", "arima": 0, "rna": 0, "indicacao": "rna", "precomedio": 0}];
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
