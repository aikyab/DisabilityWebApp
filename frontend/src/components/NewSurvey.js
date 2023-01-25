import { useCallback, useState, useRef } from 'react';

import 'survey-core/defaultV2.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import axios from '../api/Axios';

StylesManager.applyTheme("defaultV2");
const us_states = ['Any','Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado',
'Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida',
'Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
'Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
'North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau',
'Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas',
'Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>In this survey, we will ask you a set of questions which will be used to generate top school matches for you.</h2>"
    }]
  }, {
    elements: [{
      name: "university_type",
      title: "What type of university are you interested in attending?",
      type: "radiogroup",
      choices: [
        { text: "Public" },
        { text: "Private" },
        { text: "Any" }
      ],
      isRequired: true
    }]
  }
  ,
  {
    elements: [
        {
          type: "tagbox",
          choices: us_states,
          showNoneItem: true,
          name: "us_states",
          title: "In which state(s) are you interested in attending college?",
          description: "Please select all that apply.",
          hideSelectedItems: true,
          renderAs: "tagbox-react"
        }
      ],
      showQuestionNumbers: false
  }
  ,
  {
    elements: [{
        name: "geo_setting",
        title: "In which type(s) of geographical setting(s) are you interested in attending college?",
        type: "checkbox",
        choices: [
          { text: "Urban" },
          { text: "Suburban" },
          { text: "Rural" },
          { text: "Any" }
        ],
        isRequired: true
      }]
  },
  {
    elements: [{
        name: "school_size",
        title: "What size(s) of school would you prefer to attend?",
        type: "checkbox",
        choices: [
          { text: "Small" },
          { text: "Medium" },
          { text: "Large" },
          { text: "Any" }
        ],
        isRequired: true
      }]
  },
  {
    elements: [{
        type: "html",
        html: "<b>Please read the information provided below in order to answer this question.</b> <br/>\
        <b>MOST SELECTIVE</b> colleges accept fewer than 15% of all applicants AND possess an average composite ACT \
        (25%tile) score of at least 30 or an average combined SAT (25%tile) score of at least 1370. <br/>\
        <b>EXTREMELY SELECTIVE</b> colleges accept fewer than 35% of all applicants AND possess an average composite ACT \
        (25%tile) score of at least 29 OR an average combined SAT (25%tile) score of at least 1340. <br/>\
        <b>VERY SELECTIVE</b> colleges accept fewer than 50% of all applicants AND possess an average composite ACT \
        (25%tile) score of at least 27 or an average combined SAT (25%tile) score of at least 1280. <br/>\
        <b>MODERATELY SELECTIVE</b> colleges accept fewer than 60% of all applicants AND possess an average composite \
        ACT (25%tile) score of at least 25 or an average combined SAT (25%tile) score of at least 1210.",
    },
    {
        name: "selectivity",
        type: "radiogroup",
        title: "Based on the selectivity criteria, I would like to attend a school that is...",
        choices : ["Most Selective","Extremely Selective","Very Selective","Moderately Selective","Any"],
    }
    ],
    },
    {
        elements: [{
            type: "html",
            html: "<h5>In the second portion of this survey, you will be asked questions about which services provided to students with \
            disabilities in college settings are the most important to you. Please fill this survey out to the best of your abilities, in \
            order for us to score your matches most accurately. </h5>"  
        }]
    },
    {
        elements: [
            {
                type: "html",
                html: "<h5> <b>General Accomodations - </b></h5> \
                <b> Which of the following services are essential for you? <b>"  
            },
            {
                name: "asl_interpreters",
                type: "radiogroup",
                title: "ASL Interpreters",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "note_takers",
                type: "radiogroup",
                title: "Note Takers/Scribes",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "recorded_lectures",
                type: "radiogroup",
                title: "Recorded Lectures",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "test_acc",
                type: "radiogroup",
                title: "Testing Accomodations",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "assist_ldevices",
                type: "radiogroup",
                title: "Assistive Listening Devices",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "note_takers",
                type: "radiogroup",
                title: "Note Takers/Scribes",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "rem_arch_barriers",
                type: "radiogroup",
                title: "Removal of Architectural Barriers",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "course_subwaivers",
                type: "radiogroup",
                title: "Course Substitutions/Waivers",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "alt_text_materials",
                type: "radiogroup",
                title: "Alternative Text/Written Materials",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "preferential_setting",
                type: "radiogroup",
                title: "Preferential Seating",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "adaptive_equipment",
                type: "radiogroup",
                title: "Adaptive Equipment",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "assistive_tech",
                type: "radiogroup",
                title: "Assistive Tech",
                choices : ["Don’t Need","Preferred","Essential"],
            },
        ]
    },

    {
        elements: [
            {
                type: "html",
                html: "<h5> <b>Supports - </b></h5> \
                <b> How important is it for you that the school provide you supports for...? (All services are \
                    assumed to be inclusive) <b>"  
            },
            {
                name: "writing",
                type: "radiogroup",
                title: "Writing",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "math",
                type: "radiogroup",
                title: "Math",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "career_center",
                type: "radiogroup",
                title: "Career Center",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "study_skills",
                type: "radiogroup",
                title: "Study Skills/Executive Functioning",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "tutoring",
                type: "radiogroup",
                title: "Tutoring",
                choices : ["Don’t Need","Preferred","Essential"],
            },
        ]
    },
    {
        elements: [
            {
                type: "html",
                html: "<h5> <b>Other Supports and Services - </b></h5> \
                <b> How important is that your school provide you services for these specific supports and \
                services? <b>"  
            },
            {
                name: "peer_mentoring",
                type: "radiogroup",
                title: "Peer-Mentoring",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "faculty_mentoring",
                type: "radiogroup",
                title: "Faculty-Mentoring",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "social_skills",
                type: "radiogroup",
                title: "Social Skills/Activities",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "summer_bridge",
                type: "radiogroup",
                title: "Summer Bridge",
                choices : ["Don’t Need","Preferred","Essential"],
            },
            {
                name: "prog_iddstudents",
                type: "radiogroup",
                title: "Programming for Students \
                with IDD",
                choices : ["Don’t Need","Preferred","Essential"],
            },
        ]
    }

],
  showQuestionNumbers: "off",
  pageNextText: "Next",
  completeText: "Submit",
  showPrevButton: true,
  firstPageIsStarted: true,
  startSurveyText: "Start Survey",
  completedHtml: "Based on your answers, here are the top universities that matched with you!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function NewSurvey() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [sentToBackend, setSentBackend] = useState(false)

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);

    if(!sentToBackend){
        setSentBackend(true)
        try {
            const response = axios.post("/surveys",
                JSON.stringify(sender.data),
                {
                        withCredentials: true
                    }
                );
        }   
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
                }
            }
        }

  }, []);

  survey.onComplete.add(displayResults);

  return (
    <>
    {
        !isSurveyCompleted ? 
        <Survey model={survey} id="surveyContainer" />
        :
        <>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
    }
    </>
  );
}

export default NewSurvey;