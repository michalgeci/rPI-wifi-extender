(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{599:function(e,t,n){Promise.resolve().then(n.bind(n,2782))},2782:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(7437),i=n(3520),o=n(1575),l=n(6356);let a=e=>{let{signal:t,secured:n}=e;return n?t<25?(0,s.jsx)(l.n3E,{size:28}):t<50?(0,s.jsx)(l.GO9,{size:28}):t<75?(0,s.jsx)(l.qUS,{size:28}):(0,s.jsx)(l.phB,{size:28}):t<25?(0,s.jsx)(l.sRu,{size:28}):t<50?(0,s.jsx)(l.QHt,{size:28}):t<75?(0,s.jsx)(l.Vay,{size:28}):(0,s.jsx)(l.oqD,{size:28})},r=e=>{let{network:t,onClick:n}=e;return(0,s.jsxs)("div",{style:{backgroundColor:t.inUse?"#bae0ff":"transparent"},children:[(0,s.jsxs)("div",{className:"clickItem",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:16},onClick:()=>n(t),children:[(0,s.jsx)(a,{secured:t.secured,signal:t.signal}),(0,s.jsx)("p",{style:{paddingTop:16,paddingBottom:16,paddingLeft:12,fontSize:24,margin:0,flex:1},children:t.name})]}),(0,s.jsx)("div",{style:{borderTop:"1px solid #d9d9d9",marginLeft:16}})]})};var c=n(7442),d=n(2265);function u(e){let{show:t,hide:n,hiddenWifi:i,onConnect:o}=e,[l,a]=(0,d.useState)(""),[r,u]=(0,d.useState)(""),[x,h]=(0,d.useState)(!1),p=()=>{n(),a(""),u("")};return(0,s.jsx)(c.V,{style:f.dialog,open:t,onClose:()=>p(),children:(0,s.jsxs)(c.V.Panel,{style:f.dialogPanel,children:[(0,s.jsx)(c.V.Title,{style:{textAlign:"center"},children:"Connect to Wi-Fi"}),i&&(0,s.jsx)("input",{style:f.inputStyle,placeholder:"Network Name",value:l,onChange:e=>a(e.target.value)}),(0,s.jsx)("input",{style:f.inputStyle,type:x?"text":"password",placeholder:"Password",autoComplete:"new-password",value:r,onChange:e=>u(e.target.value)}),(0,s.jsxs)("div",{style:f.showPasswordBox,children:[(0,s.jsx)("input",{type:"checkbox",style:f.checkbox,checked:x,onChange:()=>h(!x)}),(0,s.jsx)("div",{children:"\xa0Show Password"})]}),(0,s.jsxs)("div",{style:f.divider,children:[(0,s.jsx)("button",{className:"genericButton clickableButton",style:{flex:1,borderRight:"1px solid #d9d9d9"},onClick:()=>{p()},children:"Cancel"}),(0,s.jsx)("button",{className:"genericButton clickableButton",style:{flex:1},onClick:()=>{o(l,r),p()},children:"CONNECT"})]})]})})}let f={inputStyle:{padding:8,borderRadius:4,backgroundColor:"#d6e4ff",fontSize:18,margin:8,border:"none"},checkbox:{width:24,height:24},dialog:{position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex",backgroundColor:"#00000066",flexDirection:"column",alignItems:"center",justifyContent:"center"},dialogPanel:{backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"center",width:"80%",borderRadius:16},divider:{display:"flex",flexDirection:"row",borderTop:"1px solid #d9d9d9"},showPasswordBox:{display:"flex",flexDirection:"row",alignItems:"center",marginLeft:8,marginBottom:8}};var x=n(2333),h=n(2126),p=n(2655);function g(){let[e,t]=(0,d.useState)(!1),[n,l]=(0,d.useState)(!1),[a,c]=(0,d.useState)(""),[f,g]=(0,d.useState)(!1),j=e=>{console.log(e),e.inUse||(g(!0),h.Z.get("api/connectToExisting?name="+e.name).then(()=>{g(!1)}).catch(()=>{g(!1),l(!1),c(e.name),e.secured?t(!0):b({ssid:e.name,password:"",hidden:!1})}).finally(()=>{m()}))},{data:y,refetch:m,isLoading:w}=(0,x.El)("api/getNetworks");console.log(y);let{refetch:b,isLoading:C}=(0,x.tL)("api/connect",()=>{m()});return(0,s.jsxs)("div",{className:"secondaryContainer",children:[(0,s.jsx)(i.O,{onClick:()=>{m()},text:"Refresh",icon:(0,s.jsx)(p.T8D,{size:24})}),(0,s.jsx)(i.O,{text:"Add Hidden Network",onClick:()=>{l(!0),t(!0)},icon:(0,s.jsx)(p.rIf,{size:24})}),(0,s.jsx)(o.a,{show:w||C||f}),(0,s.jsx)(u,{show:e,hide:()=>t(!1),hiddenWifi:n,onConnect:(e,t)=>{console.log(e,t),e&&t?b({ssid:e,password:t,hidden:!0}):e&&!t?b({ssid:e,password:"",hidden:!0}):!e&&t?b({ssid:a,password:t,hidden:!1}):alert("ERROR DATA")}}),(0,s.jsx)("div",{className:"scrollable",children:y?.map(e=>s.jsx(r,{network:e,onClick:j},e.name+e.signal))})]})}},3520:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var s=n(7437);function i(e){let{text:t,icon:n,onClick:i}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("button",{className:"genericButton clickableButton",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontSize:16,width:"100%",backgroundColor:"#fafafa"},onClick:()=>i?.(),children:[(0,s.jsx)("div",{children:t}),n]}),(0,s.jsx)("div",{className:"delimiter"})]})}},1575:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var s=n(7437);function i(e){let{show:t=!1}=e;return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex",backgroundColor:"#00000066",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,s.jsxs)("div",{className:"lds-ring",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})})}},2333:function(e,t,n){"use strict";n.d(t,{El:function(){return o},tL:function(){return l},zO:function(){return a}});var s=n(2126),i=n(2265);function o(e){let[t,n]=(0,i.useState)(),[o,l]=(0,i.useState)(),[a,r]=(0,i.useState)(!1),c=async()=>{r(!0);try{let t=await s.Z.get(e);n(t.data)}catch(e){l(e)}finally{r(!1)}};return(0,i.useEffect)(()=>{c()},[e]),{data:t,error:o,isLoading:a,refetch:()=>{c()}}}function l(e,t){let[n,o]=(0,i.useState)(),[l,a]=(0,i.useState)(),[r,c]=(0,i.useState)(!1);async function d(n){c(!0);try{let t=await s.Z.post(e,n);o(t.data)}catch(e){a(e)}finally{c(!1),t?.()}}return{data:n,error:l,isLoading:r,refetch:function(e){d(e)}}}function a(e,t){let[n,o]=(0,i.useState)(),[l,a]=(0,i.useState)(),[r,c]=(0,i.useState)(!1);async function d(n){c(!0);try{let t=await s.Z.delete(e+"?name="+n);o(t.data)}catch(e){a(e)}finally{c(!1),t?.()}}return{data:n,error:l,isLoading:r,refetch:function(e){d(e)}}}}},function(e){e.O(0,[950,51,112,578,971,23,744],function(){return e(e.s=599)}),_N_E=e.O()}]);