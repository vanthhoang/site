const positions = [
  {
    positionCompany: 'Software Engineer - Optum Technology, UnitedHealth Group',
    daterange: 'January 2018 - Present',
      project: 'Logging and Monitoring',
      points: [
        'Created a Java reusable package to generate and ingest log events into the UHG information security pipeline.',
        'Produced the logs into Kafka clusters to be sent into the data lake.'
      ],
    },
    {
    project: 'Chatbot',
    points: [
      'Built a chatbot for the company internal use case using Rasa, a conversational AI, for the back-end and React for the front-end.',
      'Used the MERN (Mongo, Express, React, Node) stack to build the server and connect Rasa with the UI.',
      'Visualized log data with ChartJS by consuming Elasticsearch API.',
      'Sent data from OpenShift to ElasticSearch using Filebeat​ and ​parsed log data with Elasticsearch Pipeline (Ingest Node).',
    ],
  }, {
    project: 'Internal Team Website',
    points: [
      'Built an internal team website using HTML, CSS, and React.'
    ],
  },
  {
    project: 'Customer Experience End-to-End Monitoring',
    points: [
      'Extracted data from Splunk to display metrics relating to customer journey going through UnitedHealthcare portals such as MyUHC website and Health4Me app.',
      'Visualized data in Grafana for different vital business functions (VBFs) for business owners and groups.',
    ],
  },
  {
    project: 'Data Streaming',
    points: [
      'Utilized the streaming capacity of Apache Kafka to create a near real-time solution to standardize the updating process of provider data into backend systems.',
      'Set up Kafka infrastructure including topics and zookeeper and managed Kafka Manager in a virtual machine (VM) which was later transferred over to a Linux server.',
    ],
  },
  {
    positionCompany: 'Systems Analyst - Optum Technology, UnitedHealth Group',
    daterange: 'June 2017 – December 2017',
    points: [
      'Worked with developers and business analysts to present use cases and benefit analysis for a proof of concept (POC) project on provider data.',
      'Was the top three out of eight projects that got approval for funding.',
    ],
  },
  {
    positionCompany: 'Research Assistant - University of Maryland ',
    daterange: 'September 2015 – December 2015',
    points: [
      'Developed COMSOL Multiphysics models describing thermal characteristics of microfluidic devices for a PCR chip.',
      'Incorporated a proportional-integral-derivative (PID) controller and a clipped voltage to control input voltages.',
      'Analyzed and attained the relationship between parameters of a PCR chip and system responses using MATLAB.',
      'Published manuscript:​ A. Sposito, V. Hoang, and D.L. DeVoe, "Rapid Real-Time PCR and High Resolution Melt Analysis in a Self-Filling Thermoplastic Chip." ​Lab on a Chip​, 2016, 16, 3524-3531.'
    ],
  }
];

export default positions;

