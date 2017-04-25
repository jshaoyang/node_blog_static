export default {
    state:{
        listData : null
    },
    strict: true,
    mutations:{
        addListData (state , data) {
            if ( !state.listData ) state.listData  = [];
            state.listData.push(...data);
        }
    }
};