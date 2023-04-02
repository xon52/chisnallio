import type { HistoryType } from '@/types'

const histories: HistoryType[] = [
  {
    title: 'Engineering Manager for SafetyCulture',
    date: '2021',
    imgUrl: new URL('/src/assets/images/sc-logo.png', import.meta.url).href,
    summary:
      'Officially joined the tech industry to lead a team of 5-12 engineers in the user management and access control space.',
  },
  {
    title: 'Co-founder of Medicly',
    date: '2019',
    imgUrl: new URL('/src/assets/images/medicly-logo.png', import.meta.url).href,
    summary:
      'Started a medical app for doctors to quickly access current medication availability and pricing information while prescribing.',
  },
  {
    title: 'Master of Management',
    date: '2019',
    imgUrl: new URL('/src/assets/images/monash-logo.png', import.meta.url).href,
    summary: 'Graduated with distinction in Management from Monash University, Australia',
  },
  {
    title: 'Management Consultant',
    date: '2017',
    imgUrl: new URL('/src/assets/images/consulting-profile.jpg', import.meta.url).href,
    summary: 'While I continued studying, I also continued supporting businesses but privately.',
  },
  {
    title: 'ISF Skills Advisor',
    date: '2015',
    imgUrl: new URL('/src/assets/images/navitas-logo.jpg', import.meta.url).href,
    summary:
      'While studying, I was contracted through Navitas to support a federal government program that supported businesses in training and business improvement activities.',
  },
  {
    title: 'Area Manager at Nalco Water',
    date: '2013',
    imgUrl: new URL('/src/assets/images/nalco-logo.png', import.meta.url).href,
    summary:
      'My first role as manager. I managed a team of 8 sales engineers across 3 offices, and was responsible for technical support and business development across North Queensland.',
  },
  {
    title: 'Process Engineer at Xstrata Technology',
    date: '2012',
    imgUrl: new URL('/src/assets/images/xstrata-logo.png', import.meta.url).href,
    summary: 'Worked in project management and international consulting roles',
  },
  {
    title: 'Chemical Engineer at Sun Metals Zinc Refinery',
    date: '2008',
    imgUrl: new URL('/src/assets/images/sunmetals-logo.jpg', import.meta.url).href,
    summary: 'Worked in various R&D and project management roles',
  },
  {
    title: 'Bachelor of Chemical Engineering',
    date: '2007',
    imgUrl: new URL('/src/assets/images/jcu-logo.png', import.meta.url).href,
    summary: 'Graduated with first class honours in Chemical Engineering from James Cook University, Australia',
  },
]

export default histories
