import {Autocomplete, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {getVersions} from "./versions.js";

export const Server = ({software, setSoftware, version, setVersion, instanceId,
                           setInstanceId, serverName, setServerName}) => {

    const updateSoftware = (software) => {
        if (!getVersions(software).includes(version)) setVersion(getVersions(software)[0]);
        setSoftware(software);
    }

    return (
        <>
            <Stack direction="column" justifyContent="space-between" spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel id="software">Software</InputLabel>
                        <Select labelId="software" label="Software" value={software}
                                onChange={(e) => updateSoftware(e.target.value)}>
                            <MenuItem value="spigot">Spigot</MenuItem>
                            <MenuItem value="paper">Paper</MenuItem>
                            <MenuItem value="purpur">Purpur</MenuItem>
                        </Select>
                    </FormControl>

                    <Autocomplete options={getVersions(software)} fullWidth value={version} onChange={(e, v) => setVersion(v)}
                                  renderInput={(params) => <TextField {...params} label="Version"/>}/>
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <TextField fullWidth label="Server Name" variant="outlined" value={serverName}
                               onChange={(e) => setServerName(e.target.value)}/>
                    <TextField fullWidth label="Instance ID" variant="outlined" value={instanceId}
                               onChange={(e) => setInstanceId(e.target.value)}/>
                </Stack>
            </Stack>
        </>);
}