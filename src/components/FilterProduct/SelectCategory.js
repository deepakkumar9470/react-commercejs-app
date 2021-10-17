import React from 'react'
import {FormControl,Select,MenuItem} from '@mui/material'

const SelectCategory = ({selectedCategory,onChange,categories}) => {
    return (
        <FormControl className="form-control">
             <Select value={selectedCategory.id} onChange={onChange}>
                  {categories.map((cat) =>(
                          <MenuItem key={cat.id} value={cat.id}>
                            {cat.name}
                          </MenuItem>
                      ))}
             </Select>
        </FormControl>
    )
}

export default SelectCategory
