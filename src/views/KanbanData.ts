import { v4 as uuidv4 } from 'uuid';

interface Candidate {
  id: string;
  task: string;
  assignedTo: string;
  assignee: string;
  Status: string;
  priority: string;
  dueDate: string;
  riskScore: string;
  riskProbability: string;
  riskImpact: string;
}

export const CandidatesData: Candidate[] = [
  {
    id: '1',
    task: 'Clean beds',
    assignedTo: 'Kieran',
    assignee: 'Linton',
    Status: 'In Review',
    priority: 'Low',
    dueDate: '25-May-2020',
    riskScore: '2',
    riskProbability: 'Rare',
    riskImpact: 'Insignificant'
  },
  {
    id: '2',
    task: 'Bath John before 6pm',
    assignedTo: 'Linton',
    assignee: 'Nitish',
    Status: 'In Review',
    priority: 'Low',
    dueDate: '26-May-2020',
    riskScore: '12',
    riskProbability: 'Likely',
    riskImpact: 'Significant'
  },
  {
    id: '3',
    task: 'Administer medicine',
    assignedTo: 'Tim',
    assignee: 'Josh',
    Status: 'In Review',
    priority: 'Low',
    dueDate: '27-May-2020',
    riskScore: '15',
    riskProbability: 'Moderate',
    riskImpact: 'Severe'
  },
  {
    id: '4',
    task: 'Provide emotional support to Lee',
    assignedTo: 'Steven',
    assignee: 'Robert',
    Status: 'Complete',
    priority: 'High',
    dueDate: '23-Aug-2020',
    riskScore: '25',
    riskProbability: 'Almost certain',
    riskImpact: 'Severe'
  },
  {
    id: '5',
    task: 'Organise rosters',
    assignedTo: 'Rachel',
    assignee: 'Sam',
    Status: 'Approved',
    priority: 'Medium',
    dueDate: '05-Jan-2021',
    riskScore: '1',
    riskProbability: 'Rare',
    riskImpact: 'Insignificant'
  }
];

interface Columns {
  [key: string]: {
    title: string;
    items: Candidate[];
  };
}

export const columnsFromBackend: Columns = {
  [uuidv4()]: {
    title: 'In Review',
    items: CandidatesData
  },
  [uuidv4()]: {
    title: 'Approved',
    items: []
  },
  [uuidv4()]: {
    title: 'In Action',
    items: []
  },
  [uuidv4()]: {
    title: 'Complete',
    items: []
  }
};
