import { Button ,Box, ISDisabled } from "@chakra-ui/react";

function Pagination ({page,handlePageChange,totalCount}){
    return (
        <Box id="pagination-section" style={{marginLeft:"48%",bg:"yellow"}}>
            <Button ISDisabled={page===1}
             onClick={()=>handlePageChange(-1)} >
                 PREVIOUS
            </Button>
            <Button ISDisabled={page}>{page}</Button>
            <Button 
              onClick={()=>handlePageChange(1)}
              ISDisabled={page==Math.ceil(totalCount/3)}
             >
                NEXT
            </Button>
        </Box>
    );
}

export default Pagination;