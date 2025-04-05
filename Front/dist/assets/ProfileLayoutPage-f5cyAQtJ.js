import{_ as h,T as st,U as ut,V as ot,W as y,X as ct,Y as lt,Z as X,$ as Y,a0 as p,a1 as K,a2 as Z,a3 as J,a4 as tt,a5 as D,a6 as G,a7 as et,a8 as L,a9 as V,aa as T,ab as I,ac as R,ad as $,ae as W,o as ht,af as ft,r as dt,j as c,ag as vt,ah as pt,ai as mt,F as yt,aj as gt,ak as xt,al as bt,am as Ct}from"./index-DZ_hxBV0.js";var Ot=function(){function o(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var r=o.prototype;return r.setOptions=function(t){var e;this.options=h({},this.defaultOptions,t),this.meta=t==null?void 0:t.meta,this.cacheTime=Math.max(this.cacheTime||0,(e=this.options.cacheTime)!=null?e:5*60*1e3)},r.setDefaultOptions=function(t){this.defaultOptions=t},r.scheduleGc=function(){var t=this;this.clearGcTimeout(),st(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){t.optionalRemove()},this.cacheTime))},r.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},r.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},r.setData=function(t,e){var i,s,a=this.state.data,u=ut(t,a);return(i=(s=this.options).isDataEqual)!=null&&i.call(s,a,u)?u=a:this.options.structuralSharing!==!1&&(u=ot(a,u)),this.dispatch({data:u,type:"success",dataUpdatedAt:e==null?void 0:e.updatedAt}),u},r.setState=function(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})},r.cancel=function(t){var e,i=this.promise;return(e=this.retryer)==null||e.cancel(t),i?i.then(y).catch(y):Promise.resolve()},r.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},r.reset=function(){this.destroy(),this.setState(this.initialState)},r.isActive=function(){return this.observers.some(function(t){return t.options.enabled!==!1})},r.isFetching=function(){return this.state.isFetching},r.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(t){return t.getCurrentResult().isStale})},r.isStaleByTime=function(t){return t===void 0&&(t=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!ct(this.state.dataUpdatedAt,t)},r.onFocus=function(){var t,e=this.observers.find(function(i){return i.shouldFetchOnWindowFocus()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},r.onOnline=function(){var t,e=this.observers.find(function(i){return i.shouldFetchOnReconnect()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},r.addObserver=function(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))},r.removeObserver=function(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(function(e){return e!==t}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:t}))},r.getObserversCount=function(){return this.observers.length},r.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},r.fetch=function(t,e){var i=this,s,a,u;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(e!=null&&e.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var l;return(l=this.retryer)==null||l.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){var f=this.observers.find(function(x){return x.options.queryFn});f&&this.setOptions(f.options)}var v=lt(this.queryKey),m=X(),d={queryKey:v,pageParam:void 0,meta:this.meta};Object.defineProperty(d,"signal",{enumerable:!0,get:function(){if(m)return i.abortSignalConsumed=!0,m.signal}});var O=function(){return i.options.queryFn?(i.abortSignalConsumed=!1,i.options.queryFn(d)):Promise.reject("Missing queryFn")},g={fetchOptions:e,options:this.options,queryKey:v,state:this.state,fetchFn:O,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var S;(S=this.options.behavior)==null||S.onFetch(g)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=g.fetchOptions)==null?void 0:a.meta)){var q;this.dispatch({type:"fetch",meta:(q=g.fetchOptions)==null?void 0:q.meta})}return this.retryer=new Y({fn:g.fetchFn,abort:m==null||(u=m.abort)==null?void 0:u.bind(m),onSuccess:function(b){i.setData(b),i.cache.config.onSuccess==null||i.cache.config.onSuccess(b,i),i.cacheTime===0&&i.optionalRemove()},onError:function(b){K(b)&&b.silent||i.dispatch({type:"error",error:b}),K(b)||(i.cache.config.onError==null||i.cache.config.onError(b,i),Z().error(b)),i.cacheTime===0&&i.optionalRemove()},onFail:function(){i.dispatch({type:"failed"})},onPause:function(){i.dispatch({type:"pause"})},onContinue:function(){i.dispatch({type:"continue"})},retry:g.options.retry,retryDelay:g.options.retryDelay}),this.promise=this.retryer.promise,this.promise},r.dispatch=function(t){var e=this;this.state=this.reducer(this.state,t),p.batch(function(){e.observers.forEach(function(i){i.onQueryUpdate(t)}),e.cache.notify({query:e,type:"queryUpdated",action:t})})},r.getDefaultState=function(t){var e=typeof t.initialData=="function"?t.initialData():t.initialData,i=typeof t.initialData<"u",s=i?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,a=typeof e<"u";return{data:e,dataUpdateCount:0,dataUpdatedAt:a?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},r.reducer=function(t,e){var i,s;switch(e.type){case"failed":return h({},t,{fetchFailureCount:t.fetchFailureCount+1});case"pause":return h({},t,{isPaused:!0});case"continue":return h({},t,{isPaused:!1});case"fetch":return h({},t,{fetchFailureCount:0,fetchMeta:(i=e.meta)!=null?i:null,isFetching:!0,isPaused:!1},!t.dataUpdatedAt&&{error:null,status:"loading"});case"success":return h({},t,{data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=e.error;return K(a)&&a.revert&&this.revertState?h({},this.revertState):h({},t,{error:a,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return h({},t,{isInvalidated:!0});case"setState":return h({},t,e.state);default:return t}},o}(),Ft=function(o){J(r,o);function r(t){var e;return e=o.call(this)||this,e.config=t||{},e.queries=[],e.queriesMap={},e}var n=r.prototype;return n.build=function(e,i,s){var a,u=i.queryKey,l=(a=i.queryHash)!=null?a:tt(u,i),f=this.get(l);return f||(f=new Ot({cache:this,queryKey:u,queryHash:l,options:e.defaultQueryOptions(i),state:s,defaultOptions:e.getQueryDefaults(u),meta:i.meta}),this.add(f)),f},n.add=function(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))},n.remove=function(e){var i=this.queriesMap[e.queryHash];i&&(e.destroy(),this.queries=this.queries.filter(function(s){return s!==e}),i===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))},n.clear=function(){var e=this;p.batch(function(){e.queries.forEach(function(i){e.remove(i)})})},n.get=function(e){return this.queriesMap[e]},n.getAll=function(){return this.queries},n.find=function(e,i){var s=D(e,i),a=s[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(u){return G(a,u)})},n.findAll=function(e,i){var s=D(e,i),a=s[0];return Object.keys(a).length>0?this.queries.filter(function(u){return G(a,u)}):this.queries},n.notify=function(e){var i=this;p.batch(function(){i.listeners.forEach(function(s){s(e)})})},n.onFocus=function(){var e=this;p.batch(function(){e.queries.forEach(function(i){i.onFocus()})})},n.onOnline=function(){var e=this;p.batch(function(){e.queries.forEach(function(i){i.onOnline()})})},r}(et),qt=function(){function o(n){this.options=h({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||Pt(),this.meta=n.meta}var r=o.prototype;return r.setState=function(t){this.dispatch({type:"setState",state:t})},r.addObserver=function(t){this.observers.indexOf(t)===-1&&this.observers.push(t)},r.removeObserver=function(t){this.observers=this.observers.filter(function(e){return e!==t})},r.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(y).catch(y)):Promise.resolve()},r.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},r.execute=function(){var t=this,e,i=this.state.status==="loading",s=Promise.resolve();return i||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){t.mutationCache.config.onMutate==null||t.mutationCache.config.onMutate(t.state.variables,t)}).then(function(){return t.options.onMutate==null?void 0:t.options.onMutate(t.state.variables)}).then(function(a){a!==t.state.context&&t.dispatch({type:"loading",context:a,variables:t.state.variables})})),s.then(function(){return t.executeMutation()}).then(function(a){e=a,t.mutationCache.config.onSuccess==null||t.mutationCache.config.onSuccess(e,t.state.variables,t.state.context,t)}).then(function(){return t.options.onSuccess==null?void 0:t.options.onSuccess(e,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(e,null,t.state.variables,t.state.context)}).then(function(){return t.dispatch({type:"success",data:e}),e}).catch(function(a){return t.mutationCache.config.onError==null||t.mutationCache.config.onError(a,t.state.variables,t.state.context,t),Z().error(a),Promise.resolve().then(function(){return t.options.onError==null?void 0:t.options.onError(a,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(void 0,a,t.state.variables,t.state.context)}).then(function(){throw t.dispatch({type:"error",error:a}),a})})},r.executeMutation=function(){var t=this,e;return this.retryer=new Y({fn:function(){return t.options.mutationFn?t.options.mutationFn(t.state.variables):Promise.reject("No mutationFn found")},onFail:function(){t.dispatch({type:"failed"})},onPause:function(){t.dispatch({type:"pause"})},onContinue:function(){t.dispatch({type:"continue"})},retry:(e=this.options.retry)!=null?e:0,retryDelay:this.options.retryDelay}),this.retryer.promise},r.dispatch=function(t){var e=this;this.state=Qt(this.state,t),p.batch(function(){e.observers.forEach(function(i){i.onMutationUpdate(t)}),e.mutationCache.notify(e)})},o}();function Pt(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function Qt(o,r){switch(r.type){case"failed":return h({},o,{failureCount:o.failureCount+1});case"pause":return h({},o,{isPaused:!0});case"continue":return h({},o,{isPaused:!1});case"loading":return h({},o,{context:r.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:r.variables});case"success":return h({},o,{data:r.data,error:null,status:"success",isPaused:!1});case"error":return h({},o,{data:void 0,error:r.error,failureCount:o.failureCount+1,isPaused:!1,status:"error"});case"setState":return h({},o,r.state);default:return o}}var Dt=function(o){J(r,o);function r(t){var e;return e=o.call(this)||this,e.config=t||{},e.mutations=[],e.mutationId=0,e}var n=r.prototype;return n.build=function(e,i,s){var a=new qt({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(i),state:s,defaultOptions:i.mutationKey?e.getMutationDefaults(i.mutationKey):void 0,meta:i.meta});return this.add(a),a},n.add=function(e){this.mutations.push(e),this.notify(e)},n.remove=function(e){this.mutations=this.mutations.filter(function(i){return i!==e}),e.cancel(),this.notify(e)},n.clear=function(){var e=this;p.batch(function(){e.mutations.forEach(function(i){e.remove(i)})})},n.getAll=function(){return this.mutations},n.find=function(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(function(i){return L(e,i)})},n.findAll=function(e){return this.mutations.filter(function(i){return L(e,i)})},n.notify=function(e){var i=this;p.batch(function(){i.listeners.forEach(function(s){s(e)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var e=this.mutations.filter(function(i){return i.state.isPaused});return p.batch(function(){return e.reduce(function(i,s){return i.then(function(){return s.continue().catch(y)})},Promise.resolve())})},r}(et);function _t(){return{onFetch:function(r){r.fetchFn=function(){var n,t,e,i,s,a,u=(n=r.fetchOptions)==null||(t=n.meta)==null?void 0:t.refetchPage,l=(e=r.fetchOptions)==null||(i=e.meta)==null?void 0:i.fetchMore,f=l==null?void 0:l.pageParam,v=(l==null?void 0:l.direction)==="forward",m=(l==null?void 0:l.direction)==="backward",d=((s=r.state.data)==null?void 0:s.pages)||[],O=((a=r.state.data)==null?void 0:a.pageParams)||[],g=X(),S=g==null?void 0:g.signal,q=O,x=!1,b=r.options.queryFn||function(){return Promise.reject("Missing queryFn")},U=function(P,A,C,j){return q=j?[A].concat(q):[].concat(q,[A]),j?[C].concat(P):[].concat(P,[C])},M=function(P,A,C,j){if(x)return Promise.reject("Cancelled");if(typeof C>"u"&&!A&&P.length)return Promise.resolve(P);var Q={queryKey:r.queryKey,signal:S,pageParam:C,meta:r.meta},w=b(Q),N=Promise.resolve(w).then(function(at){return U(P,C,at,j)});if(V(w)){var E=N;E.cancel=w.cancel}return N},F;if(!d.length)F=M([]);else if(v){var B=typeof f<"u",it=B?f:z(r.options,d);F=M(d,B,it)}else if(m){var H=typeof f<"u",nt=H?f:wt(r.options,d);F=M(d,H,nt,!0)}else(function(){q=[];var _=typeof r.options.getNextPageParam>"u",P=u&&d[0]?u(d[0],0,d):!0;F=P?M([],_,O[0]):Promise.resolve(U([],O[0],d[0]));for(var A=function(Q){F=F.then(function(w){var N=u&&d[Q]?u(d[Q],Q,d):!0;if(N){var E=_?O[Q]:z(r.options,w);return M(w,_,E)}return Promise.resolve(U(w,O[Q],d[Q]))})},C=1;C<d.length;C++)A(C)})();var k=F.then(function(_){return{pages:_,pageParams:q}}),rt=k;return rt.cancel=function(){x=!0,g==null||g.abort(),V(F)&&F.cancel()},k}}}}function z(o,r){return o.getNextPageParam==null?void 0:o.getNextPageParam(r[r.length-1],r)}function wt(o,r){return o.getPreviousPageParam==null?void 0:o.getPreviousPageParam(r[0],r)}var At=function(){function o(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new Ft,this.mutationCache=n.mutationCache||new Dt,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var r=o.prototype;return r.mount=function(){var t=this;this.unsubscribeFocus=T.subscribe(function(){T.isFocused()&&I.isOnline()&&(t.mutationCache.onFocus(),t.queryCache.onFocus())}),this.unsubscribeOnline=I.subscribe(function(){T.isFocused()&&I.isOnline()&&(t.mutationCache.onOnline(),t.queryCache.onOnline())})},r.unmount=function(){var t,e;(t=this.unsubscribeFocus)==null||t.call(this),(e=this.unsubscribeOnline)==null||e.call(this)},r.isFetching=function(t,e){var i=D(t,e),s=i[0];return s.fetching=!0,this.queryCache.findAll(s).length},r.isMutating=function(t){return this.mutationCache.findAll(h({},t,{fetching:!0})).length},r.getQueryData=function(t,e){var i;return(i=this.queryCache.find(t,e))==null?void 0:i.state.data},r.getQueriesData=function(t){return this.getQueryCache().findAll(t).map(function(e){var i=e.queryKey,s=e.state,a=s.data;return[i,a]})},r.setQueryData=function(t,e,i){var s=R(t),a=this.defaultQueryOptions(s);return this.queryCache.build(this,a).setData(e,i)},r.setQueriesData=function(t,e,i){var s=this;return p.batch(function(){return s.getQueryCache().findAll(t).map(function(a){var u=a.queryKey;return[u,s.setQueryData(u,e,i)]})})},r.getQueryState=function(t,e){var i;return(i=this.queryCache.find(t,e))==null?void 0:i.state},r.removeQueries=function(t,e){var i=D(t,e),s=i[0],a=this.queryCache;p.batch(function(){a.findAll(s).forEach(function(u){a.remove(u)})})},r.resetQueries=function(t,e,i){var s=this,a=D(t,e,i),u=a[0],l=a[1],f=this.queryCache,v=h({},u,{active:!0});return p.batch(function(){return f.findAll(u).forEach(function(m){m.reset()}),s.refetchQueries(v,l)})},r.cancelQueries=function(t,e,i){var s=this,a=D(t,e,i),u=a[0],l=a[1],f=l===void 0?{}:l;typeof f.revert>"u"&&(f.revert=!0);var v=p.batch(function(){return s.queryCache.findAll(u).map(function(m){return m.cancel(f)})});return Promise.all(v).then(y).catch(y)},r.invalidateQueries=function(t,e,i){var s,a,u,l=this,f=D(t,e,i),v=f[0],m=f[1],d=h({},v,{active:(s=(a=v.refetchActive)!=null?a:v.active)!=null?s:!0,inactive:(u=v.refetchInactive)!=null?u:!1});return p.batch(function(){return l.queryCache.findAll(v).forEach(function(O){O.invalidate()}),l.refetchQueries(d,m)})},r.refetchQueries=function(t,e,i){var s=this,a=D(t,e,i),u=a[0],l=a[1],f=p.batch(function(){return s.queryCache.findAll(u).map(function(m){return m.fetch(void 0,h({},l,{meta:{refetchPage:u==null?void 0:u.refetchPage}}))})}),v=Promise.all(f).then(y);return l!=null&&l.throwOnError||(v=v.catch(y)),v},r.fetchQuery=function(t,e,i){var s=R(t,e,i),a=this.defaultQueryOptions(s);typeof a.retry>"u"&&(a.retry=!1);var u=this.queryCache.build(this,a);return u.isStaleByTime(a.staleTime)?u.fetch(a):Promise.resolve(u.state.data)},r.prefetchQuery=function(t,e,i){return this.fetchQuery(t,e,i).then(y).catch(y)},r.fetchInfiniteQuery=function(t,e,i){var s=R(t,e,i);return s.behavior=_t(),this.fetchQuery(s)},r.prefetchInfiniteQuery=function(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(y).catch(y)},r.cancelMutations=function(){var t=this,e=p.batch(function(){return t.mutationCache.getAll().map(function(i){return i.cancel()})});return Promise.all(e).then(y).catch(y)},r.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},r.executeMutation=function(t){return this.mutationCache.build(this,t).execute()},r.getQueryCache=function(){return this.queryCache},r.getMutationCache=function(){return this.mutationCache},r.getDefaultOptions=function(){return this.defaultOptions},r.setDefaultOptions=function(t){this.defaultOptions=t},r.setQueryDefaults=function(t,e){var i=this.queryDefaults.find(function(s){return $(t)===$(s.queryKey)});i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})},r.getQueryDefaults=function(t){var e;return t?(e=this.queryDefaults.find(function(i){return W(t,i.queryKey)}))==null?void 0:e.defaultOptions:void 0},r.setMutationDefaults=function(t,e){var i=this.mutationDefaults.find(function(s){return $(t)===$(s.mutationKey)});i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})},r.getMutationDefaults=function(t){var e;return t?(e=this.mutationDefaults.find(function(i){return W(t,i.mutationKey)}))==null?void 0:e.defaultOptions:void 0},r.defaultQueryOptions=function(t){if(t!=null&&t._defaulted)return t;var e=h({},this.defaultOptions.queries,this.getQueryDefaults(t==null?void 0:t.queryKey),t,{_defaulted:!0});return!e.queryHash&&e.queryKey&&(e.queryHash=tt(e.queryKey,e)),e},r.defaultQueryObserverOptions=function(t){return this.defaultQueryOptions(t)},r.defaultMutationOptions=function(t){return t!=null&&t._defaulted?t:h({},this.defaultOptions.mutations,this.getMutationDefaults(t==null?void 0:t.mutationKey),t,{_defaulted:!0})},r.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},o}();function Mt(){const o=ht(),r=ft(),[n,t]=dt.useState(!1),e=[{title:"پروفایل",icon:c.jsx(mt,{}),path:"/profile"},{title:"علاقمندی‌ها",icon:c.jsx(yt,{}),path:"/profile/Interests"},{title:"آدرس‌های من",icon:c.jsx(gt,{}),path:"/profile/Addresses"}],i=()=>{t(!0)},s=()=>{t(!1),r("/")};return c.jsxs("div",{className:"mt-2 h-auto w-full space-y-1 sm:w-full",children:[e.map((a,u)=>{const l=o.pathname===a.path;return c.jsxs(vt,{to:a.path,className:`flex h-[38px] w-full cursor-pointer items-center justify-between rounded-md p-2 transition duration-300 ${l?"bg-[#417F56] text-white":"hover:bg-[#E5F2E9]"}`,children:[c.jsx("h1",{className:"text-[16px] sm:text-sm",children:a.title}),c.jsx("div",{className:`h-[20px] w-[20px] text-[25px] ${l?"text-white":"text-[#417F56]"}`,children:a.icon})]},u)}),c.jsxs("div",{onClick:i,className:"flex h-[38px] w-full cursor-pointer items-center justify-between rounded-md bg-[#FFF2F2] p-2 text-red-600 transition duration-300",children:[c.jsx("h1",{className:"text-[16px] sm:text-sm",children:"خروج"}),c.jsx("div",{className:"h-[20px] w-[20px] text-[25px] text-white",children:c.jsx(pt,{className:"text-red-600"})})]}),n&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",children:c.jsxs("div",{className:"scale-in w-full max-w-[90%] rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 sm:p-8 md:w-[400px] lg:w-[500px]",children:[c.jsx("h1",{className:"mb-8 text-center text-3xl text-[#0C0C0C]",children:"خروج"}),c.jsx("h2",{className:"mb-4 text-center text-lg font-medium text-[#5c5b5b]",children:"آیا مایل به خروج از حساب کاربری خود هستید؟"}),c.jsxs("div",{className:"flex flex-col justify-around sm:flex-row",children:[c.jsx("button",{className:"mb-4 w-[117px] rounded-md bg-[#FFF2F2] px-4 py-2 text-xl text-red-600 shadow-sm transition-transform duration-200 hover:scale-105 sm:mb-0 sm:w-[140px]",onClick:()=>t(!1),children:"خیر"}),c.jsx("button",{className:"w-[117px] rounded-md bg-[#417F56] px-4 py-2 text-xl text-white shadow-sm transition-transform duration-200 hover:scale-105 sm:w-[140px]",onClick:s,children:"بله"})]})]})})]})}function jt(){const{mobile:o}=xt();return c.jsxs("div",{className:"mt-3 flex flex-row items-center justify-between gap-4 sm:gap-10",children:[c.jsxs("div",{className:"flex flex-col items-start justify-center gap-y-2 sm:gap-y-4",children:[c.jsx("h1",{className:"text-[16px] text-[#353535] sm:text-[18px]",children:"کاربر ترخینه"}),c.jsx("p",{className:"text-[10px] text-[#717171] sm:text-[12px]",children:o})]}),c.jsx("div",{className:"flex",children:c.jsx("img",{className:"h-[48px] w-[48px] rounded-full sm:h-[88px] sm:w-[88px]",src:"https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/e2946bbdae579b021ad972a47e0370a956703380",alt:"user profile"})})]})}function St(){return c.jsxs("div",{className:"xs:h-[200px] xs:w-[200px] h-[342px] w-[288px] rounded-md border border-[#CBCBCB] p-2 sm:h-[280px] sm:w-[240px] md:h-auto md:w-[300px]",children:[c.jsx(jt,{}),c.jsx("hr",{className:"w-full text-[#757575]"}),c.jsx(Mt,{})]})}const Nt=new At;function Ut(){return c.jsx(bt,{client:Nt,children:c.jsxs("div",{className:"flex flex-col-reverse items-center gap-5 md:flex-row md:justify-center",children:[c.jsx("div",{className:"xs:w-[90%] h-auto w-[330px] rounded-md border border-[#CBCBCB] sm:w-[80%] md:h-[494px] md:w-[912px]",children:c.jsx(Ct,{})}),c.jsx(St,{})]})})}export{Ut as default};
