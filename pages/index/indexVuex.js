export default {
    state:{
        listData : null,
        userId : null
    },
    strict: true,
    mutations:{
        addListData (state , data) {
            if ( !state.listData ) state.listData  = [];
            state.listData.push(...data);
        },
        removeLogoInId (state) {
            state.userId = null;
        },
        addLogoInId (state , userId) {
            state.userId = userId;
        } 
    }
};