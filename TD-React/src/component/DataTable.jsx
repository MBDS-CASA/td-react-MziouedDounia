import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import jsonData from '../../data.json';

const rows = jsonData.map(item => ({
  id: item.unique_id,
  course: item.course,
  firstName: item.student.firstname,
  lastName: item.student.lastname,
  studentId: item.student.id,
  date: item.date,
  grade: item.grade
}));

// Définir les colonnes
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'course', headerName: 'Course', width: 150 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'studentId', headerName: 'Student ID', width: 100 },
  { field: 'date', headerName: 'Date', width: 120 },
  { field: 'grade', headerName: 'Grade', type: 'number', width: 90 },
  
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}