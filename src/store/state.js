export default {
  colors: {
    textColor: 'rgba(51, 51, 51, 1)',
    sideBarColor: 'rgba(91, 70, 163, 1)',
    sideBarTextColor: 'rgba(230, 227, 241, 1)',
    stripeColor: 'rgba(71, 55, 127, 1)',
    horizontalRuleColor: 'rgba(91, 70, 163, 1)',
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
