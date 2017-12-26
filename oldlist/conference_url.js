var urlList = ['http://ccsea18.org/ncom2018/index.html','http://itcse.org/cst/index.html','http://ccsea18.org/index.html','http://ccsea18.org/emsa2018/index.html','http://ccsea18.org/sea2018/index.html','http://itcse.org/index.html','http://ccsea18.org/sipro2018/index.html','http://csit2018.org/Ais/index.html','http://www.icvr.org/','http://www.icdip.org/','http://csit2018.org/index.html','http://csit2018.org/sptm/index.html','http://www.ecdmo.org/','http://acity2018.org/D2017/NMOCT-2017/index.html','http://comit2017.org/2017/comit2017/index.html','http://www.jucs.org/ujs/jucs/info/special_issues/JUCS_SemanticWeb_2018_CfP.pdf','http://www.iccmb.org/','http://airccse.org/journal/cseij/index.html','http://wireilla.com/engg/ijmech/index.html','http://cse2016.org/2018/cse/index.html','http://airccse.com/ijcsitce/index.html','http://airccse.com/caij/index.html','http://cse2016.org/2018/aifl/index.html','http://airccse.com/oraj/index.html','http://www.isc-hpc.com/research-papers-2018.html','https://wisarn2018.hds.utc.fr','http://wireilla.com/management/ijbiss/index.html','http://airccse.org/ijp2p/index.html','http://airccse.com/aeij/index.html','http://wireilla.com/physics/ijrap/index.html','http://airccse.com/csij/index.html','http://www.iccde.org/','http://wireilla.com/management/ijbbr/index.html','http://cse2016.org/2018/scom/index.html','http://cse2016.org/2018/ccnet/index.html','http://cse2016.org/2018/aifl/index.html','http://www.icint.org/','http://airccse.com/jant/index.html','http://www.icdis.org','http://www.iaria.org/conferences2018/fileseTELEMED18/HSM.pdf','https://easychair.org/cfp/ciaals2018','http://www.icigp.org/','http://www.iciic.org/','http://icc2018.ieee-icc.org/workshop/ieee-international-workshop-communication-computing-and-networking-cyber-physical-systems ','http://www.ickse.org/','http://www.iccai.net/','http://www.icnct.org/','http://www.icmva.org/','http://www.icctd.org/','http://www.airccse.org/journal/iju/index.html','http://airccse.org/journal/ijcga/index.html','http://airccse.org/journal/ijcnc.html','http://wireilla.com/ijcsa/index.html','http://airccse.org/journal/ijmnct/ijmnct.html','http://airccse.org/journal/acii/index.html','http://airccse.org/journal/ijcsitsicfp.html','http://airccse.org/journal/ijasuc/ijasuc.html','http://airccse.org/journal/ijci/index.html','http://airccse.org/journal/ijcseit/ijcseit.html','http://airccse.org/journal/ijcsit.html','http://airccse.org/journal/ijccsa/index.html','http://airccse.org/journal/ijcax/','http://codit2018.com/index.php/special-sessions','http://codit2018.com/index.php/special-sessions','http://codit2018.com/index.php/special-sessions','http://codit2018.com/index.php/special-sessions','http://codit2018.com/index.php/special-sessions','http://codit2018.com/Special-Sessions/Special-Session-CoDIT18-kMLM.pdf','http://codit2018.com/index.php/special-sessions','http://www.icfcc.org/','http://www.icsse.org/','https://sites.google.com/view/woc18/home','http://www.iccdm.org/','http://www.icmssp.org','http://www.icccbd.com','http://www.icgda.org/','http://www.icmai.org/','http://www.enase.org/IoT-Education.aspx','http://www.rie2018.info','https://2018.programming-conference.org/track/LASSY-2018-papers','http://www.rie2018.info','https://amost2018.wordpress.com','http://airccse.com/adeij/index.html','http://airccse.com/aeroij/index.html','http://airccse.com/agrij/index.html','http://airccse.com/rsej/index.html','http://airccse.com/mathsj/index.html','http://airccse.org/journal/ieij/index.html','http://airccse.com/ectij/index.html','http://airccse.com/fstj/index.html','http://wireilla.com/engg/ecij/index.html','http://airccse.org/journal/ijasa/index.html','http://airccse.com/eeij/index.html','http://airccse.org/journal/jwsc/ijwsc.html','https://icls2018.weebly.com/doctoral-consortium-early-and-mid-career-workshops.html','http://www.icaise.org','https://sites.google.com/edu.haifa.ac.il/fire18/','http://www.icacds.com','http://dm4og.inesctec.pt/dmg2','http://www.icvrt.org/','https://www.iccs-meeting.org/iccs2018/','http://www.hp3c.net/','http://www.lcid.cs.iit.edu/parsocial/index.html','https://sites.google.com/view/brodyn2018','http://www.ecomp.poli.br/~wcci2018/ijcnn-sessions/#ijcnn8','http://eva-london.org/','https://hotcloudperf.spec.org','http://depmws.org/','http://www.icfip.org/','https://pasc18.pasc-conference.org/','http://www.icisdm.org/','http://www.icccv.org/','http://www.ickms.org/','http://www.icccs.org','http://www.icfit.org/','http://www.ic4m.net/','http://www.iccda.org/','http://www.icict.org/','http://www.icmlt.org/','http://ir.shef.ac.uk/bias','https://profiles-datasearch.github.io/2018/','http://www.icsie.org/','http://www.icsct.org/','http://www.iccit.org/','http://www.iccpr.org/','https://www.hindawi.com/journals/complexity/si/732523/cfp/','http://ics2018.ict.ac.cn/#call-for-papers/','http://cost.dcc.fc.up.pt/','http://pervasivehealth.org','http://onlinelibrary.wiley.com/journal/10.4218/(ISSN)2233-7326/homepage/call_for_papers.htm','https://ucnc2018.lacl.fr/','http://www.icaip.org/','http://www.icsed.org/','http://lics.siglog.org/lics18/','https://mc.manuscriptcentral.com/tetci-ieee','http://bctcs18.cs.rhul.ac.uk','http://www.rcis-conf.com/','http://sites.psu.edu/sc2018/','https://mcu2018.lacl.fr/','http://www.continuous-se.org/RCoSE2018','https://sites.google.com/site/setvr2kn/current-workshop','http://www.icdlt.org/','http://www.icws.org/2018','http://www.thecloudcomputing.org/2018','http://www.wcse.us','http://fruct.org/registration','http://www.icose.org/','http://www.icise.org/','http://www.kdd.org/kdd2018/','http://grammars.grlmc.com/AlCoB2018/','http://cknowledge.org/request-cfp-asplos2018.html','http://www.knf.vu.lt/ivus2018','https://www.edusoft.ro/smart2018/','http://icatse.org/icisa2018/','http://icatse.org/icmwt2018/','http://securecomm.org','http://www.eusipco2018.org','https://easychair.org/conferences/?conf=cisti2018workshops','http://www.hpcct.org','http://thescc.org/2018/','http://www.iccsm.org/','http://www.cgdip.org/ ','http://www.ServicesCongress.org/2018/','https://www.computer.org/cms/Computer.org/transactions/cfps/cfp_tcsi_enmt.pdf','https://www.computer.org/cms/Computer.org/transactions/cfps/cfp_tcsi_enmt.pdf','http://cpu.icu.ac.jp/wehia/','http://www.iccia.org/','http://www.icacs.org/','https://naacl2018-srw.github.io','https://sites.google.com/view/ieetel2018','https://sites.google.com/site/quweda2018/','http://www.amw2018.co/','http://www.iccfi.org/','http://www.icete.org/','http://www.icsoft.org/','http://itsrcp18.fis.agh.edu.pl/','http://compimage18.fis.agh.edu.pl/','http://digital-library.theiet.org/files/IET_BMT_CFP_AsAService.pdf','http://www.ieee.ma/cist18','http://www.ieee.ma/cist18/special-invited-sessions/imp','http://www.ieee.ma/cist18/special-invited-sessions/eled','http://www.ieee.ma/cist18/special-invited-sessions/led-ict','http://www.ieee.ma/cist18/special-invited-sessions/omcs','http://icist.if.ktu.lt/','http://www.saeopt.ex.ac.uk','http://www.i4cs-conference.org/','http://idc2018.jrlab.science/','http://ttps://ht.acm.org/ht2018/','http://www.ramics-conference.org/','https://www.ANTs-lab.it/mess2018/','http://ssspr2018.buaa.edu.cn/','http://unif2018.cic.unb.br','http://pstnet.ca/pst2018/','http://www.iccbd.org','http://www.sci-cs.net/','http://www.icgsp.org/','http://iccvbic.org','https://www.icdis.org/','http://www2.ia-engineers.org/icisip2018/','http://www.iscsic.org/ ','https://www.icdis.org/journal-publication.html','https://aciids.pwr.edu.pl/2018/','http://ijibm.elitehall.com/','http://cse2018.swc-rwth.de','http://ccseit2018.org/index.html','http://www.sbc.org.br/sbrc2018','http://www.icmlc.org/','http://www.edusoft.ro/brain/index.php/brain/index','http://acity2018.org/index.html','http://www.iccae.org/','http://www.icvars.org/','http://www.cloudbus.org/fog/icfec2018/','http://2018.foiks.org','http://capex.cs.uh.edu/?q=content/4th-international-workshop-security-and-privacy-analytics-2018','https://www1.in.tum.de/isee2018','http://pst.knu.ua/MSTIoE','http://ccseit2018.org/CNSA2018/index.html','http://ccseit2018.org/bio2018/index.html','http://ccseit2018.org/DMDB2018/index.html','http://ccseit2018.org/AIAP2018/index.html','https://www.journals.elsevier.com/journal-of-network-and-computer-applications/call-for-papers/special-issue-on-emerging-networked-computer-applications-fo','http://simca.sicpro.org','http://www.iccrd.org/','http://www.iccgv.org/','http://www.icmlsc.org/','http://www.icdsp.org/','https://sicherheit2018.in.htwg-konstanz.de/','http://ipmu2018.uca.es','http://cibseconference.org ','http://www.easc2018.ed.ac.uk/','http://www.icsmo.org/','http://www.brightoptimizer.com/','http://csen2016.org/D2017/SMC2017/index.html','https://sites.google.com/view/cpaior2018/','http://datics.org/datics/datics-imecs-2018','http://www.icicn.org/','http://www.icsca.org/','http://www.worldcist.org/index.php/workshops','https://caise2018.ut.ee/call-for-papers/','http://www.iscsai.org/','http://www.uni-log.org/vichy2018','http://www.just.edu.jo/icics2018/','http://mpsoc.unife.it/~aistecs/','https://www.computer.org/cms/Computer.org/transactions/cfps/cfp_tetcsi_sbd.pdf','https://agileleanireland.org/call-for-speakers/','http://big-dataservice.net','https://www.elen.ucl.ac.be/','http://www.itng.info','http://www.icapm.org/','http://www.icspic.com/','http://www.wsmce.org/','http://www2.ia-engineers.org/iciae2018/','http://hosting.cs.vt.edu/hpc2018/','https://naho.nd.edu/','http://terecom2017.lynx-project.eu/','http://www.iccms.org/','http://aamas18.ifaamas.org','http://www.biostec.org/AI4Health.aspx','http://grammars.grlmc.com/TPNC2017/','http://www.mpref-2018.preflib.org','http://www.icsim.org/','http://www.icmss.org/','http://camai.spiruharet.ro/','https://www.ijmsta.com/','http://sicbs17.ndhu.edu.tw/','http://csen2017.org/SIPR2017/index.html','http://itcs2016.org/2017/jse2017/index.html','https://www.hindawi.com/journals/wcmc/si/716105/cfp/','http://www.icommet.net/index.html','https://www2018.thewebconf.org/','http://www.icsess.org','http://ieeeaccess.ieee.org/special-sections/visual-surveillance-biometrics-practices-challenges-possibilities/','http://www.cloudrobotics.info/','http://www.icseb.org/','https://2018.ieeeicassp.org/Default.asp','https://aicsproenv.github.io/PGAS-EI18','http://www.icetc.org/','http://www.icsrs.org/','http://www.icre.org/','http://www.enase.org/','http://www.iceis.org/','http://www.complexis.org/','http://www.csedu.org/','https://sites.google.com/view/edis2017/','http://www.csai.org/','https://acmng.acm.org/cori2017/call/','http://www.icncc.org/','http://iccai.usu.ac.id','http://www.iccc.org/','http://www.icoin.org','https://education.humanbrainproject.eu/web/2nd-hbp-student-conference','http://conferences.computer.org/IoTDI/','https://www.hindawi.com/journals/mpe/si/642163/cfp/','http://ipsn.acm.org/2018/cfp.html?v=1','http://www.uni-log.org/wk6-logic-for-children.html','http://www.icmei.net/','https://www.edusoft.ro/brain/index.php/brain','http://digital-library.theiet.org/files/IET_ITS_CFP_BTD.pdf','http://www.wcst.org','http://www.acmlc.org/','http://icitda.uii.ac.id/','http://icosst.kics.edu.pk/2017/','http://www.springer.com/computer/information+systems+and+applications/journal/11042','http://www.worldcis.org','http://www.iitg.ac.in/caldam2018','http://ieee-rural-elderly-health.com/2017/doctoral-symposium/','http://infohost.nmt.edu/~zheng/doku.php?id=sac2018','http://www.codaspy.org/','https://www.sigapp.org/sac/sac2018/','http://www.sitis-conf.org','http://www.csbio.org/2017/','http://siet.ub.ac.id/','https://www.springer.com/?SGWID=0-102-2-1486992-preview&dynamic=true','http://www.iccts.org/','http://www.iscmi.us/','https://www.date-conference.com/call-for-papers','http://icaita.org/CSITEC2017/index.html','http://sites.uol.edu.pk/icacs18','http://retis.sssup.it/sac2018','http://aueirc.aue.ae/','http://fruct.org/registration','http://soict.org/','http://sdiwc.net/conferences/4th-international-conference-computer-science-computer-engineering-social-media/','http://mvip2017.iut.ac.ir/en/','https://www.ou.nl/web/cserc/cserc-2017','http://macro.ms.sapientia.ro/','https://easychair.org/conferences/?conf=simes2017','http://fmt.fhstp.ac.at/','http://opodis2017.campus.ciencias.ulisboa.pt','http://core.cic.ipn.mx/','http://aueirc.aue.ae','http://aueirc.aue.ae','http://sigspatial2017.sigspatial.org/workshops/','https://www.degruyter.com/view/j/itit','https://systex17.ibr.cs.tu-bs.de/','http://ingenieria.ute.edu.ec/inciscos','http://www.icceb.org/','http://www.iccsit.org/','http://hpc.pnl.gov/IA3/','http://isycc.mybluemix.net/','http://www.info.univ-tours.fr/kasa2017/','http://www.sitis-conf.org/en/arcs-2017.php','http://www.iccee.org/','http://www.iceda.org/','https://ppopp18.sigplan.org','http://www.icgip.org/','http://www.dshcm.org','http://icsec2017.org','https://easychair.org/conferences/?conf=jcc20170','http://2017.middleware-conference.org/call-for-industry-track-paper.html','http://www.ricclisa.org/aacc/','http://www.icste.org/','https://drive.google.com/file/d/0Bw9fxbwkI0YLdDhWRlFTU0J1VGc/view?usp=sharing','https://hud-cs-research.github.io/uciot2017/','http://ieee-rural-elderly-health.com','http://conf-is.ulstu.ru/en/node/6','http://www.redcad.org/events/asoca2017/','https://sites.google.com/view/cognitiveanalytics/home','http://www.info.univ-tours.fr/kasa2017/','https://thedisappearingworkshop.wordpress.com/','http://icts.if.its.ac.id/2017/','http://iccasa.org/2017/show/home','http://ictcc.org/2017/show/home','http://fit.lqdtu.edu.vn/ies2017/','http://LogicAndSearch.org/LaSh2017/','http://www.di.unito.it/~lieto/AIC2017/','http://www.acml-conf.org/2017','http://roots-conference.org/cfp.html','http://www.iccbdc.org/','http://www.cseducation.org/index.html','http://www.saiconference.com/FICC','http://static.springer.com/sgw/documents/1603333/application/pdf/DPBMD_MTAP_CFP.pdf','http://www.iasted.org/conferences/cfp-855.html','http://skimanetwork.info','https://aaec.uitm.edu.my/scds2017/index.php','http://www.bigcomputing.org','http://www.cloud-conf.net/smartcloud/2017/'];