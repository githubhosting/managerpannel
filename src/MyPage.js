import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { usePermissions } from 'react-admin';

const MyPage = () => {
    const { isLoading, permissions } = usePermissions();
    return isLoading
        ? (<div>Waiting for permissions...</div>)
        : (
            <Card>
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
                {permissions === 'admin' &&
                    <CardContent>Sensitive data</CardContent>
                }
            </Card>
        );
}

export default MyPage;