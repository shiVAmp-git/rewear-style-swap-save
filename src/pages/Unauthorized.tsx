
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Access Denied</CardTitle>
          <p className="text-gray-600">You don't have permission to access this page</p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-gray-500">
            Please contact your administrator if you believe this is an error.
          </p>
          <Link to="/">
            <Button className="w-full bg-green-500 hover:bg-green-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unauthorized;
