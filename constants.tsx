
import React from 'react';
import type { Content, Language } from './types';

// SVG Icons as React Components
const WaterDropIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-8 8-12a8 8 0 00-16 0c0 4 8 12 8 12z" />
  </svg>
);

const FlaskIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const ChartBarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const content: Record<Language, Content> = {
  ru: {
    nav: [
      { id: 'home', text: 'Главная' },
      { id: 'about', text: 'О компании' },
      { id: 'services', text: 'Услуги' },
      { id: 'projects', text: 'Проекты' },
      { id: 'contact', text: 'Контакты' },
    ],
    home: {
      hero: {
        title: 'Инновационные решения для чистой воды',
        subtitle: 'HydroVision — ваш надежный партнер в области водоочистки, поставки реагентов и цифровизации процессов.',
        cta: 'Оставить заявку',
      },
      services: {
        title: 'Наши направления',
        items: [
          { title: 'Water-as-a-Service (WaaS)', description: 'Комплексное управление водными ресурсами вашего предприятия на аутсорсинге.' },
          { title: 'Поставка реагентов', description: 'Высококачественные химические реагенты для водоподготовки и очистки сточных вод.' },
          { title: 'Цифровые решения', description: 'Платформы для мониторинга и оптимизации технологических процессов в реальном времени.' },
        ],
      },
      advantages: {
        title: 'Почему выбирают нас',
        items: [
          { title: 'Технологичность', description: 'Применяем передовые технологии и собственные разработки.' },
          { title: 'Надежность', description: 'Гарантируем стабильность и высокое качество на всех этапах.' },
          { title: 'Экспертиза', description: 'Команда профессионалов с многолетним опытом в отрасли.' },
        ],
      },
      cta: {
        title: 'Готовы обсудить ваш проект?',
        subtitle: 'Свяжитесь с нами, чтобы получить консультацию и индивидуальное предложение.',
        button: 'Связаться с нами',
      },
    },
    about: {
      title: 'О HydroVision',
      mission: {
        title: 'Наша миссия',
        text: 'Обеспечить промышленным предприятиям доступ к чистой воде через внедрение устойчивых и эффективных технологий, способствуя экологической безопасности и экономическому росту.',
      },
      history: {
        title: 'История компании',
        text: 'Основанная в 2010 году группой инженеров-энтузиастов, HydroVision прошла путь от небольшого стартапа до лидера рынка в области инновационных решений для водоочистки. Каждый год мы расширяем географию присутствия и портфель технологий.',
      },
      team: {
        title: 'Наша команда',
        members: [
          { name: 'Алексей Иванов', role: 'Генеральный директор', imageUrl: 'https://picsum.photos/400/400?random=1' },
          { name: 'Елена Петрова', role: 'Технический директор', imageUrl: 'https://picsum.photos/400/400?random=2' },
          { name: 'Дмитрий Смирнов', role: 'Руководитель R&D', imageUrl: 'https://picsum.photos/400/400?random=3' },
          { name: 'Анна Кузнецова', role: 'Директор по развитию', imageUrl: 'https://picsum.photos/400/400?random=4' },
        ],
      },
      partners: {
          title: 'Наши партнеры'
      }
    },
    services: {
      title: 'Услуги и решения',
      items: [
        { id: 'waas', title: 'Water-as-a-Service', description: 'Полный цикл управления водными ресурсами: от проектирования и строительства очистных сооружений до их эксплуатации, обслуживания и модернизации. Мы берем на себя все риски и гарантируем качество воды, соответствующее вашим требованиям.', icon: WaterDropIcon },
        { id: 'reagents', title: 'Поставка реагентов', description: 'Мы поставляем широкий спектр реагентов для водоподготовки: коагулянты, флокулянты, ингибиторы коррозии, биоциды и мембранные реагенты. Наши специалисты помогут подобрать оптимальное решение для ваших задач.', icon: FlaskIcon },
        { id: 'digital', title: 'Цифровые решения', description: 'Наша IoT-платформа Hydro-Digital позволяет осуществлять удаленный мониторинг и управление системами водоочистки, прогнозировать сбои и оптимизировать расход реагентов, снижая операционные затраты.', icon: ChartBarIcon },
      ],
    },
    projects: {
      title: 'Реализованные проекты',
      items: [
        { title: 'Модернизация очистных сооружений металлургического комбината', description: 'Внедрение мембранной технологии и автоматизация процессов.', result: 'Снижение сброса загрязняющих веществ на 40%, экономия электроэнергии на 15%.', imageUrl: 'https://picsum.photos/600/400?random=5' },
        { title: 'Система водоподготовки для фармацевтического завода', description: 'Проектирование и запуск системы получения воды класса WFI (вода для инъекций).', result: 'Обеспечено соответствие стандартам GMP, полная автоматизация процесса.', imageUrl: 'https://picsum.photos/600/400?random=6' },
        { title: 'Цифровой двойник системы водоснабжения города N', description: 'Разработка и внедрение платформы для мониторинга и управления городской сетью.', result: 'Сокращение потерь воды на 25%, оптимизация давления в сети.', imageUrl: 'https://picsum.photos/600/400?random=7' },
        { title: 'WaaS для пищевого производства', description: 'Полный аутсорсинг процессов водоподготовки и очистки стоков.', result: 'Снижение операционных затрат на 20%, гарантия качества воды для производства.', imageUrl: 'https://picsum.photos/600/400?random=8' },
      ],
    },
    contact: {
      title: 'Свяжитесь с нами',
      form: {
        title: 'Оставьте заявку',
        name: 'Ваше имя',
        email: 'Email',
        phone: 'Телефон',
        message: 'Сообщение',
        submit: 'Отправить',
        success: 'Спасибо! Ваша заявка отправлена.',
        error: 'Ошибка. Попробуйте снова.',
      },
      details: {
        title: 'Контактная информация',
        address: '123456, Москва, ул. Инноваций, д. 1, офис 101',
        phone: '+7 (495) 123-45-67',
        email: 'info@hydrovision.tech',
      },
    },
    privacy: {
      title: 'Политика конфиденциальности',
      content: 'Текст политики конфиденциальности. Этот документ описывает, как мы собираем, используем и защищаем вашу личную информацию. Мы обязуемся защищать вашу конфиденциальность и обеспечивать безопасность ваших данных...',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} HydroVision. Все права защищены.`
    }
  },
  en: {
    nav: [
      { id: 'home', text: 'Home' },
      { id: 'about', text: 'About Us' },
      { id: 'services', text: 'Services' },
      { id: 'projects', text: 'Projects' },
      { id: 'contact', text: 'Contact' },
    ],
    home: {
      hero: {
        title: 'Innovative Solutions for Clean Water',
        subtitle: 'HydroVision is your reliable partner in water treatment, reagent supply, and process digitalization.',
        cta: 'Leave a Request',
      },
      services: {
        title: 'Our Services',
        items: [
          { title: 'Water-as-a-Service (WaaS)', description: 'Comprehensive outsourced water resource management for your enterprise.' },
          { title: 'Reagent Supply', description: 'High-quality chemical reagents for water treatment and wastewater purification.' },
          { title: 'Digital Solutions', description: 'Platforms for real-time monitoring and optimization of technological processes.' },
        ],
      },
      advantages: {
        title: 'Why Choose Us',
        items: [
          { title: 'Technology', description: 'We apply advanced technologies and our own proprietary developments.' },
          { title: 'Reliability', description: 'We guarantee stability and high quality at all stages of our work.' },
          { title: 'Expertise', description: 'A team of professionals with many years of experience in the industry.' },
        ],
      },
      cta: {
        title: 'Ready to Discuss Your Project?',
        subtitle: 'Contact us to get a consultation and a customized proposal.',
        button: 'Contact Us',
      },
    },
    about: {
      title: 'About HydroVision',
      mission: {
        title: 'Our Mission',
        text: 'To provide industrial enterprises with access to clean water through the implementation of sustainable and efficient technologies, promoting environmental safety and economic growth.',
      },
      history: {
        title: 'Company History',
        text: 'Founded in 2010 by a group of engineering enthusiasts, HydroVision has grown from a small startup to a market leader in innovative water treatment solutions. Every year we expand our geographical presence and technology portfolio.',
      },
      team: {
        title: 'Our Team',
        members: [
          { name: 'Alexey Ivanov', role: 'CEO', imageUrl: 'https://picsum.photos/400/400?random=1' },
          { name: 'Elena Petrova', role: 'CTO', imageUrl: 'https://picsum.photos/400/400?random=2' },
          { name: 'Dmitry Smirnov', role: 'Head of R&D', imageUrl: 'https://picsum.photos/400/400?random=3' },
          { name: 'Anna Kuznetsova', role: 'Business Development Director', imageUrl: 'https://picsum.photos/400/400?random=4' },
        ],
      },
       partners: {
          title: 'Our Partners'
      }
    },
    services: {
      title: 'Services and Solutions',
      items: [
        { id: 'waas', title: 'Water-as-a-Service', description: 'Full cycle of water resource management: from design and construction of treatment facilities to their operation, maintenance, and modernization. We take on all the risks and guarantee water quality that meets your requirements.', icon: WaterDropIcon },
        { id: 'reagents', title: 'Reagent Supply', description: 'We supply a wide range of reagents for water treatment: coagulants, flocculants, corrosion inhibitors, biocides, and membrane chemicals. Our specialists will help you choose the optimal solution for your needs.', icon: FlaskIcon },
        { id: 'digital', title: 'Digital Solutions', description: 'Our Hydro-Digital IoT platform allows for remote monitoring and management of water treatment systems, predicting failures and optimizing reagent consumption, thus reducing operational costs.', icon: ChartBarIcon },
      ],
    },
    projects: {
      title: 'Completed Projects',
      items: [
        { title: 'Modernization of treatment facilities for a metallurgical plant', description: 'Implementation of membrane technology and process automation.', result: 'Reduced pollutant discharge by 40%, saved 15% on electricity.', imageUrl: 'https://picsum.photos/600/400?random=5' },
        { title: 'Water treatment system for a pharmaceutical factory', description: 'Design and launch of a system for producing WFI (Water for Injection) grade water.', result: 'Ensured compliance with GMP standards, with a fully automated process.', imageUrl: 'https://picsum.photos/600/400?random=6' },
        { title: 'Digital twin of the water supply system for City N', description: 'Development and implementation of a platform for monitoring and managing the city network.', result: 'Reduced water losses by 25%, optimized network pressure.', imageUrl: 'https://picsum.photos/600/400?random=7' },
        { title: 'WaaS for a food production facility', description: 'Complete outsourcing of water treatment and wastewater purification processes.', result: 'Reduced operational costs by 20%, guaranteed water quality for production.', imageUrl: 'https://picsum.photos/600/400?random=8' },
      ],
    },
    contact: {
      title: 'Contact Us',
      form: {
        title: 'Leave a Request',
        name: 'Your Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Submit',
        success: 'Thank you! Your request has been sent.',
        error: 'An error occurred. Please try again.',
      },
      details: {
        title: 'Contact Information',
        address: '1 Innovation St, Office 101, Moscow, 123456',
        phone: '+7 (495) 123-45-67',
        email: 'info@hydrovision.tech',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      content: 'Privacy Policy text. This document describes how we collect, use, and protect your personal information. We are committed to protecting your privacy and ensuring the security of your data...',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} HydroVision. All rights reserved.`
    }
  },
};

export default content;
