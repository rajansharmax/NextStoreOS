import { Layout } from "antd";

const AdminLayout = ({ children }: any) => {
    return (
        <>
            <Layout>
                {children}
            </Layout>
        </>
    );
};
export default AdminLayout;
