
export type Language = 'ru' | 'en';
export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact' | 'privacy';

export interface NavLink {
  id: Page;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  description: string;
  result: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Content {
  nav: NavLink[];
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    services: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    advantages: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  about: {
    title: string;
    mission: {
      title: string;
      text: string;
    };
    history: {
      title: string;
      text: string;
    };
    team: {
      title: string;
      members: TeamMember[];
    };
    partners: {
        title: string;
    }
  };
  services: {
    title: string;
    items: Service[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  contact: {
    title: string;
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
    details: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
  };
  privacy: {
    title: string;
    content: string;
  };
  footer: {
    copyright: string;
  }
}
