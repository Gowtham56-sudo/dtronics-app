import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class RoomListPage extends StatefulWidget {
  const RoomListPage({super.key});

  @override
  State<RoomListPage> createState() => _RoomListPageState();
}

class _RoomListPageState extends State<RoomListPage> {
  final List<Map<String, dynamic>> rooms = [
    {
      'name': 'Living Room',
      'icon': FontAwesomeIcons.couch,
      'temperature': '24°C',
      'devices': 8,
      'color': const Color(0xFF667EEA),
    },
    {
      'name': 'Kitchen',
      'icon': FontAwesomeIcons.utensils,
      'temperature': '22°C',
      'devices': 6,
      'color': const Color(0xFF06B6D4),
    },
    {
      'name': 'Bedroom',
      'icon': FontAwesomeIcons.bed,
      'temperature': '23°C',
      'devices': 5,
      'color': const Color(0xFF10B981),
    },
    {
      'name': 'Bathroom',
      'icon': FontAwesomeIcons.shower,
      'temperature': '25°C',
      'devices': 3,
      'color': const Color(0xFF8B5CF6),
    },
    {
      'name': 'Office',
      'icon': FontAwesomeIcons.desktop,
      'temperature': '21°C',
      'devices': 4,
      'color': const Color(0xFFF59E0B),
    },
    {
      'name': 'Garage',
      'icon': FontAwesomeIcons.car,
      'temperature': '18°C',
      'devices': 2,
      'color': const Color(0xFFEF4444),
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My House'),
        leading: IconButton(
          onPressed: () => Navigator.pop(context),
          icon: const Icon(Icons.arrow_back_ios),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Rooms',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: Color(0xFF1E293B),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Select a room to control devices',
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey[600],
              ),
            ),
            const SizedBox(height: 32),
            Expanded(
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 16,
                  mainAxisSpacing: 16,
                  childAspectRatio: 0.85,
                ),
                itemCount: rooms.length,
                itemBuilder: (context, index) {
                  return _buildRoomCard(rooms[index]);
                },
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _showAddRoomDialog();
        },
        backgroundColor: const Color(0xFF667EEA),
        child: const Icon(Icons.add, color: Colors.white),
      ),
    );
  }

  Widget _buildRoomCard(Map<String, dynamic> room) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () {
          Navigator.pushNamed(context, '/device-control');
        },
        borderRadius: BorderRadius.circular(20),
        child: Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.05),
                blurRadius: 20,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: room['color'].withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: FaIcon(
                  room['icon'],
                  color: room['color'],
                  size: 24,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                room['name'],
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF1E293B),
                ),
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  Icon(
                    Icons.thermostat_outlined,
                    size: 16,
                    color: Colors.grey[600],
                  ),
                  const SizedBox(width: 4),
                  Text(
                    room['temperature'],
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey[600],
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
              const Spacer(),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  '${room['devices']} devices',
                  style: TextStyle(
                    fontSize: 12,
                    color: Colors.grey[600],
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _showAddRoomDialog() {
    final nameController = TextEditingController();
    
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
        title: const Text('Add New Room'),
        content: TextField(
          controller: nameController,
          decoration: InputDecoration(
            labelText: 'Room Name',
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
            ),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              if (nameController.text.isNotEmpty) {
                setState(() {
                  rooms.add({
                    'name': nameController.text,
                    'icon': FontAwesomeIcons.door,
                    'temperature': '22°C',
                    'devices': 0,
                    'color': const Color(0xFF6366F1),
                  });
                });
                Navigator.pop(context);
              }
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF667EEA),
              foregroundColor: Colors.white,
            ),
            child: const Text('Add'),
          ),
        ],
      ),
    );
  }
}