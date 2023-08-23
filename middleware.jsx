export { default } from "next-auth/middleware";

export const config = { matcher: [] }
//export const config = { matcher: ["/admin", "/admin/orders", "/admin/addProducts", "/checkOut", "/manageAccount"] }
//export const config = { matcher: ['/((?!login|register|admin|checkOut|manageAccount).*)'] }

