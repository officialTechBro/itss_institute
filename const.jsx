import Link from "next/link"


export const COURSE = [
    'Graphic Design',
    'Back-End Development',
    'Front Development',
    'UI / UX Development',
    'SQL Data Managment',
    'Java Programming',
    'C# / .Net',
    'T24 Core Banking Application',
    'Web Application Development with Python',
    'Network Specialist',
    'Diploma in Software Engineering',
    'Web Development with PHP & SQL',
]

export const Button = ({text, classes, link}) => {
    return (
        <button className={classes}>
            <Link href={link}> {text} </Link>
        </button>
    )
}

export const OPENINGS = [
    {
        job: 'SQL Instructor',
        type: 'Full Time',
        location: 'Ibadan'
    },
    {
        job: 'BankEnd Engineer',
        type: 'Full Time',
        location: 'Ibadan'
    },
    // {
    //     job: 'Counselor',
    //     type: 'Contract',
    //     location: 'Ibadan'
    // },
    {
        job: 'Copywriter',
        type: 'Part Time',
        location: 'Ibadan'
    },
    // {
    //     job: 'Data Analyst',
    //     type: 'Full Time',
    //     location: 'Ibadan'
    // },
    // {
    //     job: 'Auditor',
    //     type: 'Full Time',
    //     location: 'Ibadan'
    // },
    // {
    //     job: 'Legal Counsel',
    //     type: 'Full Time',
    //     location: 'Ibadan'
    // },
    // {
    //     job: 'Social Media Manager',
    //     type: 'Full Time',
    //     location: 'Ibadan'
    // },
    // {
    //     job: 'Technician',
    //     type: 'Contract',
    //     location: 'Ibadan'
    // },
]

export const Teams = [
    {
        name: 'Mr. Taiwo Oladosu',
        position: 'CEO'
    },
    {
        name: 'Mrs. Anna Sutherland',
        position: 'CTO'
    },
    {
        name: 'Mr. Jude Bellingham',
        position: 'Secretary General'
    },
    {
        name: 'Mr. Mark Atanda',
        position: 'Account General'
    },
    {
        name: 'Miss. Fatima Oladapo',
        position: 'Technical Adviser'
    },
    {
        name: 'Mr. Mark Oyekola',
        position: ' QA Instructor'
    },
    {
        name: 'Mr. David Philip',
        position: 'FrontEnd Instructor'
    },
    {
        name: 'Miss. Opeyemi Oladeji',
        position: 'PM Instructor'
    },
]

