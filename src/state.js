export default {
  colors: {
    sideBarColor: 'rgba(65, 184, 131, 1)',
    sideBarTextColor: 'rgba(232, 246, 240, 1)',
    stripeColor: 'rgba(52, 73, 94, 1)',
    horizontalRuleColor: 'rgba(52, 73, 94, 1)',
    textColor: 'rgba(44, 62, 80, 1)',
  },
  config: {
    resume: {
      stripe: {
        enabled: true,
      },
    },
    applicant: {
      name: '',
      tagline: '',
      mobile: {
        enabled: true,
        pretty: '',
        value: '',
      },
      email: {
        enabled: true,
        value: '',
      },
      linkedin: {
        enabled: false,
        pretty: '',
        value: '',
      },
      github: {
        enabled: false,
        pretty: '',
        value: '',
      },
      facebook: {
        enabled: false,
        pretty: '',
        value: '',
      },
      website: {
        enabled: false,
        pretty: '',
        value: '',
      },
      location: {
        enabled: true,
        value: '',
      },
    },
    currentRole: {
      enabled: true,
      company: '',
      title: '',
      duration: '',
      paragraph: '',
      achievementList: [],
    },
    experience: {
      enabled: true,
      list: [],
    },
    education: {
      enabled: true,
      list: [],
    },
    skills: {
      enabled: true,
      list: [],
    },
    references: {
      enabled: true,
      list: [],
    },
  },
};
