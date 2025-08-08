import React, { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance'; // ✅ Use preconfigured axios
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  // ✅ Fetch companies on component mount
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axiosInstance.get('/api/v1/company/get'); // No need to add base URL
        setCompanies(res.data.companies || []);
        setFilteredCompanies(res.data.companies || []);
      } catch (error) {
        console.error('Error fetching companies:', error);
        if (error.response?.status === 401) {
          navigate('/login'); // ✅ use navigate instead of window.location
        }
      }
    };

    fetchCompanies();
  }, [navigate]);

  // ✅ Filter companies when search text changes
  useEffect(() => {
    const filtered = searchText
      ? companies.filter((company) =>
          company.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : companies;

    setFilteredCompanies(filtered);
  }, [searchText, companies]);

  return (
    <div className="pt-10 px-4">
      <input
        type="text"
        placeholder="Search companies..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-sm"
      />

      <Table>
        <TableCaption>List of your recently registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCompanies.map((company) => (
            <TableRow key={company._id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo} />
                </Avatar>
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.createdAt?.split('T')[0]}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                      onClick={() => navigate(`/admin/companies/${company._id}`)}
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
