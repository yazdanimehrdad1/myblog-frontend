import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const LIST_VIEW_ICONS = ['border-all', 'list']
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up']

const FilteringMenu = ({onChange , filter})=>{
    return (
        <div className="filtering-menue mb-2">
            <FontAwesomeIcon 
            onClick={ () =>{
                onChange('view', {list: +!filter.view.list})
            }}
            className="clickable hoverable mr-3"
            size="2x"
            icon= {filter.view.list ===1 ? 'border-all' : 'list'   }
            />

            <FontAwesomeIcon 
            onClick={ () =>{
                onChange('date', {asc: +!filter.date.asc})
            }}
            className="clickable hoverable"
            size="2x"
            icon= {DATE_FILTERING_ICONS[filter.date.asc]}
            />
                
        </div>
    )
}


export default FilteringMenu