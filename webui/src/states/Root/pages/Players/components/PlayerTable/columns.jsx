import {Checkbox, Typography} from "@mui/material";
import HealthImage from "@/common/assets/images/health.webp";
import FoodImage from "@/common/assets/images/food.webp";
import {capitalizeFirst} from "@/common/utils/StringUtil.js";
import {formatTime, formatWorld} from "./utils/formatter.jsx";

const columns = ({setOP}) => [
    {
        field: 'name', headerName: 'Username', minWidth: 200, flex: 1, renderCell: (params) => {
            return (
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={`https://crafatar.com/avatars/${params.row.uuid}?size=25&overlay`} alt={params.row.name}
                         style={{marginRight: 5}}/>
                    <Typography>{params.row.name}</Typography>
                </div>
            )
        }
    },
    {field: 'uuid', headerName: 'Player-ID', flex: 1, minWidth: 300},
    {
        field: 'current_world', headerName: 'Current world', minWidth: 150, flex: 1, renderCell: (params) => {
            return (
                <div style={{display: "flex", alignItems: "center"}}>
                    {formatWorld(params.row.current_world)}
                </div>
            )
        }
    },
    {field: 'address', headerName: 'IP-Address'},
    {
        field: 'health', headerName: 'Health', type: "number", minWidth: 70, flex: 0.5, renderCell: (params) => (
            <div style={{display: "flex", alignItems: "center"}}>
                <Typography>{params.row.health / 2}</Typography>
                <img src={HealthImage} alt="Health" style={{marginLeft: 5}} width={20} height={20}/>
            </div>)
    },
    {
        field: 'food_level', headerName: 'Hunger', type: "number", minWidth: 70, flex: 0.5, renderCell: (params) => (
            <div style={{display: "flex", alignItems: "center"}}>
                <Typography>{params.row.food_level / 2}</Typography>
                <img src={FoodImage} alt="Food" style={{marginLeft: 5}} width={20} height={20}/>
            </div>)
    },
    {
        field: 'is_op', headerName: 'OP', type: "boolean", minWidth: 70, flex: 0.5, renderCell: (params) => (
            <Checkbox checked={params.row.is_op} onChange={() => setOP(params.row)}/>
        )
    },
    {
        field: 'game_mode', headerName: 'Gamemode', flex: 1, renderCell: (params) => (
            <Typography>{capitalizeFirst(params.row.game_mode)}</Typography>
        )
    },
    {
        field: 'player_time', headerName: 'Playtime', flex: 1, renderCell: (params) => (
            <Typography>{formatTime(params.row.player_time)}</Typography>
        )
    },
];

export default columns;