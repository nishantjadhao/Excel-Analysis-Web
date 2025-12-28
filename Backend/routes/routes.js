import UploadFile1 from "../../Frontend/src/pages/UploadFile1";

<Routes>
  <Route path="/*" element={<Home/>} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  {/* <Route path="/uloadfile1" element={<UploadFile1 />} /> */}
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
