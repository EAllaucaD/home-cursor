import { Tabs, usePathname, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line
    // Nota: El warning del linter sobre router.replace('index') es seguro de ignorar en este contexto,
    // ya que expo-router lo interpreta correctamente para tabs.
    if (pathname === '/(tabs)' || pathname === '/(tabs)/') {
      // router.replace('index');
    }
  }, [pathname]);

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.right.to.line" color={color} />,
        }}
      />
      <Tabs.Screen
        name="homesiiu"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen name="carnet" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="horarios" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="opciones" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="asistente" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="asignaturas" options={{ tabBarButton: () => null }} />
    </Tabs>
  );
}
