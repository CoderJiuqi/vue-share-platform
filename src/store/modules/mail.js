

const mail = {
    state: {
        certificationId: '',
        date: '',
        mailId: '',
        draftId: '',
        pageType: '',
        mailType: '',
        target: null
    },
    mutations: {
        SET_MAIL_ID: (state, mailId) => {
            state.mailId = mailId;
        },
        SET_CERTIFICATIONID: (state, id) => {
            state.certificationId = id;
        },
        SET_DATE: (state, date) => {
            state.date = date;
        },
        SET_DRAFT_ID: (state, draftId) => {
            state.draftId = draftId;
        },
        SET_PAGE_TYPE: (state, pageType) => {
            state.pageType = pageType;
        },
        SET_MAIL_TYPE: (state, mailType) => {
            state.mailType = mailType;
        },
        SET_TARGET: (state, targetList) => {
            state.target = targetList.slice();
        }
    }
}

export default mail;