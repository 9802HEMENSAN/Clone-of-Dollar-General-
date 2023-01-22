import { Button ,Box} from "@chakra-ui/react";

function Pagination ({page,handlePageChange,totalCount}){
    return (
        <Box id="pagination-section" style={{marginLeft:"48%",bg:"yellow"}}>
            <Button disabled={page===1}
             onClick={()=>handlePageChange(-1)} >
                 PREVIOUS
            </Button>
            <Button disabled>{page}</Button>
            <Button 
              onClick={()=>handlePageChange(1)}
              disabled={page==Math.ceil(totalCount/3)}
             >
                NEXT
            </Button>
        </Box>
    );
}

export default Pagination;