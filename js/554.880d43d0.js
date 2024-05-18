"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[554],{1173:function(a,e,t){t.d(e,{J8:function(){return n},Zg:function(){return r}});const l=[{name:"Nose and pharynx",label:"Nose and pharynx",className:"Nose and pharynx",img:t(4158)},{name:"Airway",label:"Airway",className:"Airway",img:t(697)},{name:"Lung",label:"Lung",className:"Lung",img:t(8136)}];e.Ay=l;const n=[{label:"CellType",value:"CellType"},{label:"original_name",value:"original_name"},{label:"ACTINN",value:"ACTINN"},{label:"scARCH",value:"scARCH"},{label:"CHETAH",value:"CHETAH"},{label:"scmap",value:"scmap"},{label:"SingleCellNet",value:"SingleCellNet"},{label:"SingleR",value:"SingleR"},{label:"ScPred",value:"ScPred"}],r=["Head","Hypothalamus","Cortical","White matter","Choroid","Unclassified","Midbrain","Pluripotent stem cell","Cerebral cortex","Telencephalon","Ganglionic eminences","Thalamus","Hippocampus","Amygdala","Diencephalon","Cerebellum","Presumptive cortex","Basal ganglia","Pons","Hindbrain","GE","Pituitary gland","cerebellar","Grey matter","Medulla","Cortex","Tumour","Forebrain","Brain"]},2554:function(a,e,t){t.r(e),t.d(e,{default:function(){return c}});var l=function(){var a=this,e=a._self._c;return e("div",[e("Statistics"),e("div",{staticClass:"wrap"},[e("b-pane-title",{attrs:{label:"ATLAS",center:""}}),e("atlasBrains",{on:{change:a.changeAtlas}}),e("div",{staticClass:"atlas-umap",attrs:{align:"center"}},["Nose and pharynx"===a.atlasName?e("router-link",{attrs:{to:{path:"/dataBrowser",query:{region:"all",atlas:"Adult"}}}},[e("img",{attrs:{src:t(4802),alt:""}})]):"Airway"===a.atlasName?e("router-link",{attrs:{to:{path:"/dataBrowser",query:{region:"all",atlas:"Fetal"}}}},[e("img",{attrs:{src:t(3320),alt:""}})]):"Lung"===a.atlasName?e("router-link",{attrs:{to:{path:"/dataBrowser",query:{region:"all",atlas:"Tumour"}}}},[e("img",{attrs:{src:t(3004),alt:""}})]):e("el-empty",{attrs:{description:"Not available in current version of Respire Cell Atlas"}})],1)],1)],1)},n=[],r=(t(8937),t(1173));var i={name:"indexComp",components:{Statistics:()=>t.e(901).then(t.bind(t,5901)),atlasBrains:()=>t.e(151).then(t.bind(t,9389))},data(){return{ATLAS:r.Ay,atlasName:"Nose and pharynx"}},methods:{changeAtlas(a){this.atlasName=a.name},linkTo(a){this.$router.push({path:"/dataBrowser",query:{region:"all",atlas:a}})}}},s=i,o=t(6367),u=(0,o.A)(s,l,n,!1,null,"1c7c8f20",null),c=u.exports},697:function(a,e,t){a.exports=t.p+"img/airway.34d0cd6b.png"},8136:function(a,e,t){a.exports=t.p+"img/lung.e88c180e.png"},4158:function(a,e,t){a.exports=t.p+"img/nose-pharynx.008a1c8b.png"},4802:function(a,e,t){a.exports=t.p+"img/Adult.44624ecb.png"},3320:function(a,e,t){a.exports=t.p+"img/Fetal.5e17611f.png"},3004:function(a,e,t){a.exports=t.p+"img/Tumour.1eeb8d59.png"}}]);