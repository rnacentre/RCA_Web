"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[725],{8725:function(e,n,a){a.r(n),a.d(n,{default:function(){return r}});var t=function(){var e=this,n=e._self._c;return n("div",[n("b-pane-label",{attrs:{label:"METHOD"}}),n("geneSearch",{attrs:{data:e.METHODS,isMethod:""},on:{change:e.handleCheckChange},model:{value:e.searchRegion,callback:function(n){e.searchRegion=n},expression:"searchRegion"}})],1)},l=[],i={name:"MarkerRegion",components:{geneSearch:()=>a.e(784).then(a.bind(a,2784))},data(){return{searchRegion:[],defaultProps:{children:"children",label:"label"},METHODS:[]}},computed:{},methods:{handleCheckChange(e){let n=e;if(e.includes("All")){const a=this.METHODS.map((e=>e.value));this.searchRegion=a,n=[...e,...a]}this.$emit("input",n),this.$emit("change",n)}},async mounted(){const e=await this.$store.dispatch("xlsxRead/fetchXlsxData","METHODS");this.METHODS=e.map((e=>({value:e.Annotation,label:e.Annotation})))}},s=i,h=a(6367),c=(0,h.A)(s,t,l,!1,null,null,null),r=c.exports}}]);